function my_Dictionary() { //define my_Dictionary function
    var Band = { //parent variable will be 'band'
        Name:"Led Zeppelin", //key 'name' defined
        Genre:"Classic rock", //key 'genre' defined
        Decade:"1970s", //key 'decade' defined
        BandMembers:4 //key 'band members' defined
    };
    delete Band.Genre; //delete the key 'genre'
    document.getElementById("Dictionary").innerHTML = Band.Genre; //print key 'genre'
}