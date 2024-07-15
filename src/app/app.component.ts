import { Component } from '@angular/core';
import { Orders } from './orders';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'route';
  dataTable={
    "customers": [
            {
    "id": 1,
    "name": "Ahmed Ali"
            },
            {
    "id": 2,
    "name": "Aya Elsayed"
            },
            {
                "id": 3,
                "name": "Mina Adel"
            },
            {
                "id": 4,
                "name": "Sarah Reda"
            },
            {
                "id": 5,
                "name": "Mohamed Sayed"
            }
        ],
        "transactions": [
            {
                "id": 1,
                "customer_id": 1,
                "date": "2022-01-01",
                "amount": 1000
            },
            {
                "id": 2,
                "customer_id": 1,
                "date": "2022-01-02",
                "amount": 2000
            },
            {
                "id": 3,
                "customer_id": 2,
                "date": "2022-01-01",
                "amount": 550
            },
            {
                "id": 4,
                "customer_id": 3,
                "date": "2022-01-01",
                "amount": 500
            },
            {
                "id": 5,
                "customer_id": 2,
                "date": "2022-01-02",
                "amount": 1300
            },
            {
                "id": 6,
                "customer_id": 4,
                "date": "2022-01-01",
                "amount": 750
            },
            {
                "id": 7,
                "customer_id": 3,
                "date": "2022-01-02",
                "amount": 1250
            },
            {
                "id": 8,
                "customer_id": 5,
                "date": "2022-01-01",
                "amount": 2500
            },
            {
                "id": 9,
                "customer_id": 5,
                "date": "2022-01-02",
                "amount": 875
            }
        ]
    }
    displayData!:Orders[]
    myChart!: Chart;
    myLine!: Chart;
    termName:string=''
    searchAmount:any=null


    filterTransactions():void{
      const processedData = this.dataTable.customers.map(customer => {
        return {
          ...customer,
          transactions: this.dataTable.transactions.filter(transaction => transaction.customer_id === customer.id)
        };
      });
      this.displayData = processedData
    }

    ngOnInit(): void {
     this.filterTransactions()
     this.createChart(null)

    }
    updateChart(userData:any) {
        this.myChart.destroy()
        this.myLine.destroy()
        this.createChart(userData)
    }
    createChart(userData:any):void{
      const ctx:any = document.getElementById('myChart');
      const cty:any = document.getElementById('myLine');

        if(userData){
          this.myChart=new Chart(ctx, {
            type: 'bar',
            data: {
              labels: userData.transactions.map((row: { date: any; }) => row.date),
              datasets: [{
                label: userData.name,
                data: userData.transactions.map((row: { amount: any; }) => row.amount),
                borderWidth: 1,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                barThickness: 25, // Adjust bar thickness
                maxBarThickness: 30 // Max bar thickness
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              },
              layout:{
                // padding:20
              }
            }
          });
          this.myLine=new Chart(cty, {
            type: 'line',
            data: {
              labels: userData.transactions.map((row: { date: any; }) => row.date),
              datasets: [{
                label: userData.name,
                data: userData.transactions.map((row: { amount: any; }) => row.amount),
                borderWidth: 1,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }

          });

        }
        else{
          this.myChart=new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['All Amount'],
              datasets: [{
                label: 'Amount',
                data: [8925],
                borderWidth: 1,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                barThickness: 15, // Adjust bar thickness
                maxBarThickness: 20 // Max bar thickness
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
          this.myLine=new Chart(cty, {
            type: 'line',
            data: {
              labels: ['All Amount'],
              datasets: [{
                label: 'Amount',
                data: [8925],
                borderWidth: 1,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }

          });
        }
    }

}
