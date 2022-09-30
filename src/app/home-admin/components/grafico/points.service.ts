import { Injectable } from "@angular/core";

interface Points {
    name: string;
    series: {};
}

@Injectable({
    providedIn: 'root'
})

export class PointsService {

    private data: Points[] = [
        {
            "name": "Seg",
            "series": [
                {
                    "name": "Points Batidos",
                    "value": 20
                },
                {
                    "name": "Points Não Batidos",
                    "value": 2
                }
            ]
        },

        {
            "name": "Ter",
            "series": [
                {
                    "name": "Points Batidos",
                    "value": 21
                },
                {
                    "name": "Points Não Batidos",
                    "value": 1
                }
            ]
        },

        {
            "name": "Quar",
            "series": [
                {
                    "name": "Points Batidos",
                    "value": 15
                },
                {
                    "name": "Points Não Batidos",
                    "value": 7
                }
            ]
        },
        {
            "name": "Quin",
            "series": [
                {
                    "name": "Points Batidos",
                    "value": 20
                },
                {
                    "name": "Points Não Batidos",
                    "value": 2
                }
            ]
        },
        {
            "name": "Sex",
            "series": [
                {
                    "name": "Points Batidos",
                    "value": 17
                },
                {
                    "name": "Points Não Batidos",
                    "value": 5
                }
            ]
        }
    ];

    get pointsData() {
        return this.data;
    }
}
