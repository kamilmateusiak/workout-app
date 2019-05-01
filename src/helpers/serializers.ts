export function stripHtmlTagsFromText(text: string) {
  // return text.replace(/(<([^>]+)>)/ig,"");
  return text.replace(/(<? *script)/gi, 'illegalscript')
}