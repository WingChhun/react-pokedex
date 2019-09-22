export const logger = (groupName, messages = []) => {
  if (!groupName || !messages) return;

  console.group(groupName);
  messages.map(({ display, log }) => console.log(display, log));
  console.groupEnd(groupName);

}