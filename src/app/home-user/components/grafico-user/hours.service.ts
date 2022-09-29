import { Injectable } from "@angular/core";

interface Hours {
    name: string;
    series: {};
}

@Injectable({
    providedIn: 'root'
})

export class HoursService {

    private data: Hours[] = [
        {
            "name": "1º week",
            "series": [
                {
                    "name": "Seg",
                    "value": 8
                },
                {
                    "name": "Ter",
                    "value": 6
                },
                {
                    "name": "Quar",
                    "value": 5
                },
                {
                    "name": "Quin",
                    "value": 8
                },
                {
                    "name": "Sex",
                    "value": 7
                }
            ]
        },
    
        {
            "name": "2º Week",
            "series": [
                {
                    "name": "Seg",
                    "value": 4
                },
                {
                    "name": "Ter",
                    "value": 8
                },
                {
                    "name": "Quar",
                    "value": 7
                },
                {
                    "name": "Quin",
                    "value": 8
                },
                {
                    "name": "Sex",
                    "value": 7
                }
            ]
        },
    
        {
            "name": "3º Week",
            "series": [
                {
                    "name": "Seg",
                    "value": 7
                },
                {
                    "name": "Ter",
                    "value": 9
                },
                {
                    "name": "Quar",
                    "value": 8
                },
                {
                    "name": "Quin",
                    "value": 6
                },
                {
                    "name": "Sex",
                    "value": 8
                }
            ]
        },
        {
            "name": "4º Week",
            "series": [
                {
                    "name": "Seg",
                    "value": 7
                },
                {
                    "name": "Ter",
                    "value": 8
                },
                {
                    "name": "Quar",
                    "value": 8
                },
                {
                    "name": "Quin",
                    "value": 6
                },
                {
                    "name": "Sex",
                    "value": 8
                }
            ]
        }
    ];

    get hoursData() {
        return this.data;
    }
}