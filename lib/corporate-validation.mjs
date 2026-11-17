import {corporateOptions,corporateProgrammes} from './corporate-options.mjs';

export function validateCorporate(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw) || raw.consent !== true || raw.website) throw new Error('Invalid enquiry');
  const data = {};
  for (const [key,min,max] of [['name',2,100],['company',2,150],['role',0,100],['email',3,200],['phone',7,30],['location',2,150],['requirements',0,2000]]) {
    if (typeof raw[key] !== 'string') throw new Error('Invalid field');
    const value = (key === 'requirements' ? raw[key].replace(/\r\n?/g,'\n') : raw[key]).trim();
    if (value.length < min || value.length > max || /[\x00-\x08\x0b-\x1f\x7f]/.test(value) || (key !== 'requirements' && /[\r\n]/.test(value))) throw new Error('Invalid field');
    data[key] = value;
  }
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email) || !/^[+\d ()-]{7,30}$/.test(data.phone) || data.phone.replace(/\D/g,'').length < 7) throw new Error('Invalid contact');
  for (const [key,options] of Object.entries(corporateOptions)) {
    if (!options.includes(raw[key])) throw new Error('Invalid option');
    data[key] = raw[key];
  }
  if (!Array.isArray(raw.programmes) || !raw.programmes.length || raw.programmes.length > corporateProgrammes.length || raw.programmes.some(value=>!corporateProgrammes.includes(value))) throw new Error('Invalid programmes');
  data.programmes = [...new Set(raw.programmes)].sort();
  if (typeof raw.date !== 'string' || (raw.date && (!/^\d{4}-\d{2}-\d{2}$/.test(raw.date) || new Date(raw.date).toISOString().slice(0,10) !== raw.date || Date.parse(raw.date+'T23:59:59Z') < Date.now()))) throw new Error('Invalid date');
  if (typeof raw.flexible !== 'boolean') throw new Error('Invalid flexibility');
  data.date = raw.date;
  data.flexible = raw.flexible;
  return data;
}
