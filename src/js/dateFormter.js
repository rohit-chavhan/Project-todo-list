const { format } = require('date-fns');

function formateMonth(arg) {
  return format(new Date(arg), 'MMM');
}

function formateDay(arg) {
  return format(new Date(arg), 'd');
}

export { formateMonth, formateDay };
