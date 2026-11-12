import type {MetadataRoute} from 'next';
import {indexablePaths,origin} from './seo';
export default function sitemap():MetadataRoute.Sitemap{return indexablePaths.map(path=>({url:origin+path}))}
