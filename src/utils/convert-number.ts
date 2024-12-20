type ArgsType = {
  number: string;
  type: 'to-persian' | 'to-english';
};

export default function convertNumber(args: ArgsType): string {
  const digits: any = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  };
  if (args.type === 'to-persian') {
    return args.number
      .toString()
      .replace(
        /\d/g,
        (digit: string) => Object.keys(digits)[parseInt(digit)] || digit,
      );
  } else {
    return args.number.replace(/[۰-۹]/g, (match: string): string => {
      return digits[match];
    });
  }
}
