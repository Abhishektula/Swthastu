export const wisdom=[
{title:'Action with perspective',source:'Bhagavad Gita 2.47',theme:'A contemporary reflection: choose a meaningful action without demanding complete control over its outcome.',url:'https://www.gitasupersite.iitk.ac.in/srimad?language=dv&field_chapter_value=2&field_nsutra_value=47'},
{title:'Returning gently',source:'Bhagavad Gita 6.26',theme:'A contemporary reflection: when attention wanders, return with patience rather than shame.',url:'https://www.gitasupersite.iitk.ac.in/srimad?language=dv&field_chapter_value=6&field_nsutra_value=26'},
{title:'Compassion with steadiness',source:'Bhagavad Gita 12.13–14',theme:'A contemporary reflection: practise kindness without abandoning personal boundaries or pretending pain is absent.',url:'https://www.gitasupersite.iitk.ac.in/srimad?language=dv&field_chapter_value=12&field_nsutra_value=13'},
{title:'Conscious choice',source:'Katha Upanishad · the good and the pleasing, 1.2.1–2',theme:'A contemporary reflection: consider the difference between immediate comfort and the choice that serves your values.',url:'https://sanskritdocuments.org/doc_upanishhat/katha.html'},
{title:'Care and interconnectedness',source:'Isha Upanishad · opening verse',theme:'A contemporary reflection: relate to the world with care and enoughness rather than possession. Interpretations differ across traditions.',url:'https://sanskritdocuments.org/doc_upanishhat/iisha.pdf'},
{title:'Living what we learn',source:'Taittiriya Upanishad · 1.11',theme:'A contemporary reflection: bring honesty, learning and thoughtful responsibility into everyday relationships.',url:'https://sanskritdocuments.org/doc_upanishhat/tait.html'}
] as const;
export const wisdomContext=wisdom.map(w=>`${w.source}: ${w.theme} Source: ${w.url}`).join('\n');
