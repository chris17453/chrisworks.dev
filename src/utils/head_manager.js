export function set_document_title(title_text) {
  if (typeof document !== 'undefined' && title_text) document.title = title_text;
}

function upsert_meta_attr(attr_name, key, val) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector(`meta[${attr_name}="${key}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr_name, key); document.head.appendChild(el); }
  el.setAttribute('content', val);
}

export function set_meta_name(name_key, content_val) { if (content_val) upsert_meta_attr('name', name_key, content_val); }
export function set_meta_prop(prop_key, content_val) { if (content_val) upsert_meta_attr('property', prop_key, content_val); }

export function set_link_rel(rel, href) {
  if (typeof document === 'undefined' || !href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) { el = document.createElement('link'); el.setAttribute('rel', rel); document.head.appendChild(el); }
  el.setAttribute('href', href);
}

export function set_json_ld(id, obj) {
  if (typeof document === 'undefined' || !obj) return;
  let el = document.getElementById(id);
  if (!el) { el = document.createElement('script'); el.type = 'application/ld+json'; el.id = id; document.head.appendChild(el); }
  el.textContent = JSON.stringify(obj);
}

