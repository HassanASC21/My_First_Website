let x = document.createElement("h1")
x.innerText = "NBA 2021 Free Agency"
document.body.appendChild(x)

let nba_team_1 = {
    "image" : "nba_images/hawks.png",
    "team_name" : "Atlanta Hawks",
    "player_1" : "Lou Williams",
    "deal_1" : "sign 1 year $5M deal to return",
    "player_2" : "John Collins",
    "deal_2" : "sign 5 year $125M deal to return",
    "player_3" : "Gorgui Dieng",
    "deal_3" : "signs 1 year $4M deal",
    "player_4" : "Solomon Hill",
    "deal_4" : "signs 1 year",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 8/10",
}

let nba_team_2 = {
    "team_name" : "Boston Celtics",
    "player_1" : "Enes Kanter",
    "deal_1" : "signs 1 year deal",
    "player_2" : "",
    "deal_2" : "",
    "player_3" : "",
    "deal_3" : "",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 7/10",
}

let nba_team_3 = {
    "team_name" : "Brookyn Nets",
    "player_1" : "Bruce Brown",
    "deal_1" : "signs 1 year $4.7M deal",
    "player_2" : "Blake Griffin",
    "deal_2" : "signs 1 year deal",
    "player_3" : "Patty Mills", 
    "deal_3" : "signs 2 year $12M deal",
    "player_4" : "Deandre Bembry",
    "deal_4" : "signs 1 year deal",
    "player_5" : "James Johnson",
    "deal_5" : "signs 1 year deal",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 6/10",
}

let nba_team_4 = {
    "team_name" : "Charlotte Hornets",
    "player_1" : "Kelly Oubre Jr",
    "deal_1" : "signs 2 year $25M deal",
    "player_2" : "Ish Smith",
    "deal_2" : "signs 1 year deal",
    "player_3" : "",
    "deal_3" : "",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 7/10",
}

let nba_team_5 = {
    "team_name" : "Chicago Bulls",
    "player_1" : "Demar DeRozan",
    "deal_1" : "signs 3 year $85M deal",
    "player_2" : "Lonzo Ball",
    "deal_2" : "signs 4 year $85M deal",
    "player_3" : "Tony Bradley",
    "deal_3" : "signs 2 year deal",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 9/10",
}

let nba_team_6 = {
    "team_name" : "Cleveland Cavaliers",
    "player_1" : "Jarrett Allen",
    "deal_1" : " signs 5 year $100M deal",
    "player_2" : "",
    "deal_2" : "",
    "player_3" : "",
    "deal_3" : "",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 5/10",
}

let nba_team_7 = {
    "team_name" : "Dallas Mavericks",
    "player_1" : "Tim Hardaway Jr.",
    "deal_1" : "signs 4 year $72M deal to return",
    "player_2" : "Reggie Bullock",
    "deal_2" : "signs 3 year $30.5M deal",
    "player_3" : "Boban Marjanovic",
    "deal_3" : "signs 1 year deal to return",
    "player_4" : "Sterling Brown",
    "deal_4" : "sings 2 year $6.2M deal",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 5/10",
}

let nba_team_8 = {
    "team_name" : "Denver Nuggets",
    "player_1" : "Will Barton",
    "deal_1" : "signs 2 year $32M deal to return",
    "player_2" : "Jeff Green",
    "deal_2" : "signs 2 year $10M deal",
    "player_3" : "Austin Rivers",
    "deal_3" : "signs 1 year deal",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 7.5/10",
}

let nba_team_9 = {
    "team_name" : "Detroit Pistons",
    "player_1" : "Trey Lyles",
    "deal_1" : "signs 2 year $5M deal",
    "player_2" : "Corey Joseph",
    "deal_2" : " signs 2 year $10M deal",
    "player_3" : "Saben Lee",
    "deal_3" : "signs 3 year deal",
    "player_4" : "Kelly Olynyk",
    "deal_4" : "signs a 3 year $37M deal",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 3/10",
}

let nba_team_10 = {
    "team_name" : "Golden State Warriors",
    "player_1" : "Andre Iguodala",
    "deal_1" : "signs a deal",
    "player_2" : "Otto Porter Jr",
    "deal_2" : "signs a 1 year minimum deal", 
    "player_3" : "Nemanja Bjelica",
    "deal_3" : "signs a 1 year deal",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 7/10",
}

let nba_team_11 = {
    "team_name" : "Houston Rockets",
    "player_1" : "Daniel Theis",
    "deal_1" : "signs a 4 year $36M deal", 
    "player_2" : "David Nwaba",
    "deal_2" : "signs a 3 year $15M deal",
    "player_3" : "",
    "deal_3" : "",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 6/10",
}

let nba_team_12 = {
    "team_name" : "Indiana Pacers",
    "player_1" : "Torrey Craig",
    "deal_1" : "signs a 2 year $10M deal", 
    "player_2" : "T.J. McConnell",
    "deal_2" : "signs a 4 year $35.2M deal",
    "player_3" : "",
    "deal_3" : "",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 8/10",
}

let nba_team_13 = {
    "team_name" : "Los Angeles Clippers",
    "player_1" : "Kawhi Leonard",
    "deal_1" : "signs a deal",
    "player_2" : "Reggie Jackson", 
    "deal_2" : "signs a 2 year $22M deal",
    "player_3" : "Justise Winslow",
    "deal_3" : "signs a deal",
    "player_4" : "Nicolas Batum",
    "deal_4" : "signs a 2 year deal",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 9/10",
}

let nba_team_14 = {
    "team_name" : "Los Angeles Lakers",
    "player_1": "Talen Horton-Tucker",
    "deal_1" : "signs a 3 year $32M deal",
    "player_2" : "Kendrick Nunn",
    "deal_2" : "signs a 2 year $10M deal",
    "player_3" : "Wayne Ellington",
    "deal_3" : "signs a 1 year deal", 
    "player_4" : "Carmelo Anthony",
    "deal_4" : "signs a 1 year deal", 
    "player_5" : "Kent Bazemore", 
    "deal_5" : "signs a 1 year deal",
    "player_6" : "Trevor Ariza",
    "deal_6" : "signs a 1 year deal",
    "player_7" : "Malik Monk", 
    "deal_7" : "signs a deal",
    "player_8" : "Dwight Howard",
    "deal_8" : "signs a deal",
    "y" : "Overall Rating: 8/10",
}

let nba_team_16 = {
    "team_name" : "Miami Heat",
    "player_1" : "Kyle Lowry", 
    "deal_1" : "signs a 3 year $90M deal",
    "player_2" : "Duncan Robinson",
    "deal_2" : "signs a 5 year $90M deal",
    "player_3" : "Victor Oladipo",
    "deal_3" : "signs a 1 year deal to return",
    "player_4" : "P.J. Tucker",
    "deal_4" : "signs a 2 year $15M deal",
    "player_5" : "Dewayne Dedmon",
    "deal_5" : "signs a year deal to return",
    "player_6" : "Markieff Morris",
    "deal_6" : "signs a deal",
    "player_7" : "Max Strus",
    "deal_7" : "signs a 2 year $3.5M deal",
    "player_8" : "Gabe Vincent", 
    "deal_8" : "signs a 2 year $3.5M deal",
    "y" : "Overall Rating: 9/10",

}

let nba_team_17 = {
    "team_name" : "Milwakuee Bucks",
    "player_1" : "Semi Ojeleye",
    "deal_1" : "signs a 1 year deal",
    "player_2" : "Rodney Hood",
    "deal_2" : " signs a 1 year deal",
    "player_3" : "George Hill",
    "deal_3" : "signs a 2 year $8M deal",
    "player_4" : "Bobby Portis",
    "deal_4" : "signs a 2 year $9M deal",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 6.5/10",
}


let nba_team_19 = {
    "team _name" : "New Orleans Pelicans",
    "player_1" : "Marcos Louzada Silva",
    "deal_1" : "signs a 4 year deal",
    "player_2" : "Garret Temple",
    "deal_2" : "signs a 3 year deal",
    "player_3" : "",
    "deal_3" : "",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 4/10",
}

let nba_team_20 = {
    "team_name" : "New York Knicks",
    "player_1" : "Evan Fournier",
    "deal_1" : "signs a 4 year $78M deal",
    "player_2" : "Kemba Walker",
    "deal_2" : "signs a 1 year $8M deal",
    "player_3" : "Derrick Rose",
    "deal_3" : "signs a 3 year $43M deal to return",
    "player_4" : "Alec Burks",
    "deal_4" : "signs a 3 year $30M deal",
    "player_5" : "Nerlens Noel",
    "deal_5" : "signs a 3 year $32M deal",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 8/10",
}

let nba_team_21 = {
    "team_name" : " Oklahome City Thunder",
    "player_1" : "Mike Muscala",
    "deal_1" : "signs a 2 year $7M deal",
    "player_2" : "",
    "deal_2" : "",
    "player_3" : "",
    "deal_3" : "",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 4/10",
}

let nba_team_22 = {
    "team_name" : "Orlando Magic",
    "player_1" : "Robin Lopez",
    "deal_1" : "signs a 1 year $5M deal",
    "player_2" : "",
    "deal_2" : "",
    "player_3" : "",
    "deal_3" : "",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 6/10",
}

let nba_team_23 = {
    "team_name" : "Philadelphia 76ers",
    "player_1" : "Georges Niang",
    "deal_1" : "signnns a 2 year $6.7M deal",
    "player_2" : "Furkan Korkmaz",
    "deal_2" : "signs a 3 year $15M deal",
    "player_3" : "Danny Green", 
    "deal_3" : "signs a 2 year deal",
    "player_4" : "Andre Drummond",
    "deal_4" : "signs a 1 year minimum deal",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 4.5/10",
}

let nba_team_24 = {
    "team_name" : "Phoenix Suns",
    "player_1" : "Chris Paul",
    "deal_1" : "signs a 4 year $120M deal",
    "player_2" : "Cameron Payne",
    "deal_2" : "signs a 3 year $19M deal",
    "player_3" : "Javale McGee",
    "deal_3" : "signs a 1 year $5M deal",
    "player_4" : "Frank Kaminsky",
    "deal_4" : "signs a 1 year deal",
    "player_5" : "Abdel Nader",
    "deal_5" : "signs a 2 year $4.2M deal",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 7/10",
}

let nba_team_25 = {
    "team_name" : "Portland Trail Blazers",
    "player_1" : "Ben McLemore",
    "deal_1" : "signs a deal",
    "player_2" : "Cody Zeller",
    "deal_2" : "signs a 1 year deal",
    "player_3" : "Norman Powell",
    "deal_3" : "signs a 5 year $90M deal",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 3/10",
}

let nba_team_26 = {
    "team_name" : "Sacramento Kings",
    "player_1" : "Richaun Holmes",
    "deal_1" : "signs a 4 year $55M deal",
    "player_2" : "Terence Davis",
    "deal_2" : "signs a deal",
    "player_3" : "Alex Len",
    "deal_3" : "signs a 2 year $7.65M deal",
    "player_4" : "Maurice Harkless",
    "deal_4" : "signs a 2 year $9M deal",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 5.5/10",
}

let nba_team_27 = {
    "team_name" : "San Antonio Spurs",
    "player_1" : "Bryn Forbes",
    "deal_1" : "signs a deal",
    "player_2" : "Zach Collins",
    "deal_2" : "signs a 3 year $22M deal",
    "player_3" : "Doug McDermott",
    "deal_3" : "signs a 3 year $42M deal",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 7/10",

}

let nba_team_28 = {
    "team_name" : "Toronto Raptors",
    "player_1" : "Gary Tremt Jr.",
    "deal_1" : "signs a 3 year $54M deal",
    "player_2" : "Khem Birch",
    "deal_2" : "signs a 3 year $20M deal",
    "player_3" : "Sam Dekker",
    "deal_3" : "signs a deal",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 7/10",
}

let nba_team_29 = {
    "team_name" : "Utah Jazz",
    "player_1" : "Hassan Whiteside",
    "deal_1" : "signs a deal",
    "player_2" : "Rudy Gay",
    "deal_2" : "signs a deal",  
    "player_3" : "Mike Conley",
    "deal_3" : "signs a 3 year $74M deal",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 6.5/10",
}

let nba_team_30 = {
    "team_name" : "Washington Wizards",
    "player_1" : "Raul Neto",
    "deal_1" : "signs a deal",
    "player_2" : "",
    "deal_2" : "",
    "player_3" : "",
    "deal_3" : "",
    "player_4" : "",
    "deal_4" : "",
    "player_5" : "",
    "deal_5" : "",
    "player_6" : "",
    "deal_6" : "",
    "player_7" : "",
    "deal_7" : "",
    "player_8" : "",
    "deal_8" : "",
    "y" : "Overall Rating: 6/10",
}

let nba = [nba_team_1, nba_team_2, nba_team_3, nba_team_4, nba_team_5, nba_team_6, nba_team_7, nba_team_8, nba_team_9, nba_team_10, nba_team_11, nba_team_12, nba_team_13, nba_team_14, nba_team_16, nba_team_17, nba_team_19, nba_team_20, nba_team_21, nba_team_22, nba_team_23, nba_team_24, nba_team_25, nba_team_26, nba_team_27, nba_team_28, nba_team_29, nba_team_30]


for (i = 0; i < nba.length; i++) {
    let a = document.createElement("h3")
    a.innerText = nba[i].team_name
    document.body.appendChild(a)

    let b = document.createElement("h4")
    b.innerText = nba[i].player_1
    document.body.appendChild(b)

    let c = document.createElement("h5")
    c.innerText = nba[i].deal_1
    document.body.appendChild(c)
    
    let e = document.createElement("h4")
    e.innerText = nba[i].player_2
    document.body.appendChild(e)

    let f = document.createElement("h5")
    f.innerText = nba[i].deal_2
    document.body.appendChild(f)

    let g = document.createElement("h4")
    g.innerText = nba[i].player_3
    document.body.appendChild(g)

    let h = document.createElement("h5")
    h.innerText = nba[i].deal_3
    document.body.appendChild(h)

    let z = document.createElement("h4")
    z.innerText = nba[i].player_4
    document.body.appendChild(z)

    let j = document.createElement("h5")
    j.innerText = nba[i].deal_4
    document.body.appendChild(j)

    let k = document.createElement("h4")
    k.innerText = nba[i].player_5
    document.body.appendChild(k)

    let l = document.createElement("h5")
    l.innerText = nba[i].deal_5
    document.body.appendChild(l)

    let m = document.createElement("h4")
    m.innerText = nba[i].player_6
    document.body.appendChild(m)

    let n = document.createElement("h5")
    n.innerText = nba[i].deal_6
    document.body.appendChild(n)

    let o = document.createElement("h4")
    o.innerText = nba[i].player_7
    document.body.appendChild(o)

    let p = document.createElement("h5")
    p.innerText = nba[i].deal_7
    document.body.appendChild(p)

    let q = document.createElement("h4")
    q.innerText = nba[i].player_8
    document.body.appendChild(q)

    let r = document.createElement("h5")
    r.innerText = nba[i].deal_8
    document.body.appendChild(r)

    let s = document.createElement("h6")
    s.innerText = nba[i].y
    document.body.appendChild(s)

    let t = document.createElement("hr")
    document.body.appendChild(t)
}

