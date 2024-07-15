import { Pipe, PipeTransform } from '@angular/core';
import { Orders } from '../orders';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(orders: any[], searchAmount: number): any[] {

    return orders.map((row: {transactions: {amount: any;}; }) => row.transactions.amount === searchAmount)
  }
  }


