export const dateFormatWithTime = (transactionDate: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  const date = new Date(transactionDate);

  return date.toLocaleDateString('en-US', options);
};
