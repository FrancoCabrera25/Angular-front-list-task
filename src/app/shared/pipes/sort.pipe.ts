
// @Pipe({ name: 'sortBy' })
// export class SortByPipe implements PipeTransform {

//   transform(value: any[], order = '', column: string = ''): any[] {
//     if (!value || order === '' || !order) { return value; } // no array
//     if (value.length <= 1) { return value; } // array with only one item
//     if (!column || column === '') { 
//       if(order==='asc'){return value.sort()}
//       else{return value.sort().reverse();}
//     } // sort 1d array
//     return value.sort(a => a[column])
//     orderBy(value, [column], [order]);
//   }
// }