var repository = {
    _allTrips: [],
    _tripIndex: {},

    addTrip: function(trip){
        this._allTrips.push(trip);
        this._tripIndex[trip.id] = trip;
    },

    getAllTrips: function(){
        return this._allTrips;
    },

    getTrip: function(id){
        return this._tripIndex[id];
    }
};

repository.addTrip({
    id: 'alaska-2005',
    name: 'Alaska 2005',
    img: {
        filename: 'Arctic Circle.JPG',
        alt: 'My motorcycle at the Arctic Circle at midnight.'
    },
    description:
        'This motorcycle trip took me 25,000 miles over about 10 weeks. I visited the Southernmost, Easternmost,' +
        ' Northernmost, and Westernmost points in the lower 48 states, and the Northernmost and Westernmost road' +
        ' accessible points in North America. In addition to these bragging rights points, I stopped at a lot of' +
        ' great sights along the way. I\'ve included some pictures of the (better than expected) road conditions' +
        ' up North for reference by other riders thinking of making the trip.'
});

repository.addTrip({
    id: 'southwest-2007',
    name: 'Southwest 2007',
    img: {
        filename: 'Jumbo Rocks Close Up 2.jpg',
        alt: 'A rock formation in the Jumbo Rocks campground of Joshua Tree National Park at sunset.'
    },
    description:
        'This trip took me through the last three national parks in the lower 48 that I hadn\'t been to:' +
        ' Channel Islands, Joshua Tree, and Saguaro.'
});

repository.addTrip({
    id: 'mexico-2013',
    name: 'Mexico 2013',
    img: {
        filename: 'Iguana on Our Heads.jpg',
        alt: 'Ethan and Sarah with the Royal Playa del Carmen\'s pet iguana on their heads.'
    },
    description:
        'Sarah and I visited Playa del Carmen, Mexico to attend her friend Anne\'s wedding. While there' +
        ' we explored the cenote at Rio Secreto, Mayan ruins in Coba and Tulum, and went snorkeling' +
        ' at Gran Arrecife Maya.'
});

repository.addTrip({
    id: 'moab-may-2006',
    name: 'Moab May 2006',
    img: {
        filename: 'Tower Arch 2.jpg',
        alt: 'Tower Arch in Arches National Park'
    },
    description:
        'On this trip we visited Canyonlands and Arches National Parks. We toured around the' +
        ' Needles area of Canyonland on my motorcycle and saw the few sights that can be reached by paved' +
        ' roads and short hikes. To see more requires travelling on moderate and difficult 4x4 trails. In Arches' +
        ' we met up with some friends who were in town for a Nissan Xterra off road convention. After seeing a few' +
        ' of the popular sights from the paved road we all got in the 4x4 vehicles and headed out to Tower Arch.' +
        ' This was one of the best sights and it was nearly deserted because of it\'s slightly more remote' +
        ' location. I can\'t wait to go back and explore more of the world famous 4x4 trails in the area.'
});

repository.addTrip({
    id: 'uncle-bud-hut-2007',
    name: 'Uncle Bud Hut 2007',
    img: {
        filename: 'Galena Mountain.jpg',
        alt: 'Galena Mountain'
    },
    description:
        'This backcountry hut is located at 11,380ft, near the Continental Divide, west of Leadville' +
        ' Colorado, on the shores of Turquoise Lake. You can find more information about this and' +
        ' other huts at the <a href="http://www.huts.org" target="_blank">10th Mountain Division</a>' +
        ' web site. There are also several guide books published about the many hut systems in Colorado.'
});

module.exports = repository;