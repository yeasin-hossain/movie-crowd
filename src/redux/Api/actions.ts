interface ErrorType {
  code?: string;
  details: {
    [key: string]: string | string[];
  };
}
export const ErrorFormat = ({code, details}: ErrorType) => {
  if (code === 'field_error') {
    return Object.keys(details).reduce((a, c) => {
      if (a.length > 0) {
        a = [a, ...details[c]].join('\n* ');
      } else {
        a = ['', ...details[c]].join('\n* ');
      }
      return a;
    }, '');
  } else if (code === 'non_field_error') {
    return details.message as string;
  } else {
    return 'An Unexpected Error Occurred';
  }
};
