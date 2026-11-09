import {SUPABASE_URL,SUPABASE_ANON_KEY,READY} from './supabase-config.js';
let client;
export async function db(){
  if(!READY) return null;
  if(!client){ const {createClient}=await import('https://esm.sh/@supabase/supabase-js@2'); client=createClient(SUPABASE_URL,SUPABASE_ANON_KEY,{auth:{persistSession:true,autoRefreshToken:true}}); }
  return client;
}
export function safeUrl(v){try{let u=new URL(v);return u.protocol==='https:'?u.href:'';}catch{return '';}}
export function slugify(v){return String(v).trim().toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,64)}
