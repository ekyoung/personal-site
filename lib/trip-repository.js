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
        filename: 'arctic-circle.jpg',
        alt: 'My motorcycle at the Arctic Circle at midnight.'
    },
    description:
        'This motorcycle trip took me 25,000 miles over about 10 weeks. I visited the Southernmost, Easternmost,' +
        ' Northernmost, and Westernmost points in the lower 48 states, and the Northernmost and Westernmost road' +
        ' accessible points in North America. In addition to these bragging rights points, I stopped at a lot of' +
        ' great sights along the way. I\'ve included some pictures of the (better than expected) road conditions' +
        ' up North for reference by other riders thinking of making the trip.',
    slides: {
        indexFileUrl: 'http://images.ethanyoung.us/Alaska2005/Alaska2005Index.xml',
        rootUrl: 'http://images.ethanyoung.us/Alaska2005'
    }
});

repository.addTrip({
    id: 'southwest-2007',
    name: 'Southwest 2007',
    img: {
        filename: 'jumbo-rocks-close-up-2.jpg',
        alt: 'A rock formation in the Jumbo Rocks campground of Joshua Tree National Park at sunset.'
    },
    description:
        'This trip took me through the last three national parks in the lower 48 that I hadn\'t been to:' +
        ' Channel Islands, Joshua Tree, and Saguaro.',
    slides: {
        indexFileUrl: 'http://images.ethanyoung.us/Southwest2007/Southwest2007Index.xml',
        rootUrl: 'http://images.ethanyoung.us/Southwest2007'
    }
});

repository.addTrip({
    id: 'mexico-2013',
    name: 'Mexico 2013',
    img: {
        filename: 'iguana-on-our-heads.jpg',
        alt: 'Ethan and Sarah with the Royal Playa del Carmen\'s pet iguana on their heads.'
    },
    description:
        'Sarah and I visited Playa del Carmen, Mexico to attend her friend Anne\'s wedding. While there' +
        ' we explored the cenote at Rio Secreto, Mayan ruins in Coba and Tulum, and went snorkeling' +
        ' at Gran Arrecife Maya.',
    slides: {
        indexFileUrl: 'http://images.ethanyoung.us/Mexico2013/Mexico2013Index.xml',
        rootUrl: 'http://images.ethanyoung.us/Mexico2013'
    }
});

repository.addTrip({
    id: 'moab-may-2006',
    name: 'Moab May 2006',
    img: {
        filename: 'tower-arch-2.jpg',
        alt: 'Tower Arch in Arches National Park'
    },
    description:
        'On this trip we visited Canyonlands and Arches National Parks. We toured around the' +
        ' Needles area of Canyonland on my motorcycle and saw the few sights that can be reached by paved' +
        ' roads and short hikes. To see more requires travelling on moderate and difficult 4x4 trails. In Arches' +
        ' we met up with some friends who were in town for a Nissan Xterra off road convention. After seeing a few' +
        ' of the popular sights from the paved road we all got in the 4x4 vehicles and headed out to Tower Arch.' +
        ' This was one of the best sights and it was nearly deserted because of it\'s slightly more remote' +
        ' location. I can\'t wait to go back and explore more of the world famous 4x4 trails in the area.',
    slides: {
        indexFileUrl: 'http://images.ethanyoung.us/MoabMay2006/MoabMay2006Index.xml',
        rootUrl: 'http://images.ethanyoung.us/MoabMay2006'
    }
});

repository.addTrip({
    id: 'uncle-bud-hut-2007',
    name: 'Uncle Bud Hut 2007',
    img: {
        filename: 'galena-mountain.jpg',
        alt: 'Galena Mountain'
    },
    description:
        'This backcountry hut is located at 11,380ft, near the Continental Divide, west of Leadville' +
        ' Colorado, on the shores of Turquoise Lake. You can find more information about this and' +
        ' other huts at the <a href="http://www.huts.org" target="_blank">10th Mountain Division</a>' +
        ' web site. There are also several guide books published about the many hut systems in Colorado.',
    slides: {
        indexFileUrl: 'http://images.ethanyoung.us/UncleBudHut2007/UncleBudHut2007Index.xml',
        rootUrl: 'http://images.ethanyoung.us/UncleBudHut2007'
    }
});

repository.addTrip({
    id: 'betty-bear-hut-2006',
    name: 'Betty Bear Hut 2006',
    img: {
        filename: 'betty-bear-hut.jpg',
        alt: 'Betty Bear Hut'
    },
    description:
        'This backcountry hut was built by the 10th Mountain Division Hut Association in 1991. It is located' +
        ' at 11,100ft, near the Continental Divide, east along the Fryingpan River from Basalt Colorado. You' +
        ' can find more information about this and other huts at the' +
        ' <a href="http://www.huts.org" target="_blank">10th Mountain Division</a> web site. There are also' +
        ' several guide books published about the many hut systems in Colorado.',
    slides: {
        indexFileUrl: 'http://images.ethanyoung.us/BettyBearHut2006/BettyBearHut2006Index.xml',
        rootUrl: 'http://images.ethanyoung.us/BettyBearHut2006'
    }
});

repository.addTrip({
    id: 'bingham-canyon-mine',
    name: 'Bingham Canyon Mine',
    img: {
        filename: 'truck.jpg',
        alt: 'Big Truck'
    },
    description:
        'This open pit copper mine is the largest man-made excavation in the world. In the roughly 100 years' +
        ' since it has been in operation, over 6 billion tons of material has been removed. For more information' +
        ' (and some better pictures) visit the <a href="http://www.kennecott.com/" target="_blank">Kennecott Home Page</a>.',
    slides: {
        indexFileUrl: 'http://images.ethanyoung.us/BinghamCanyonMine/Mine2005Index.xml',
        rootUrl: 'http://images.ethanyoung.us/BinghamCanyonMine'
    }
})

repository.addTrip({
    id: 'dinosaur-nm-2005',
    name: 'Dinosaur NM 2005',
    img: {
        filename: 'cliff-and-snow.jpg',
        alt: 'Cliff And Snow'
    },
    description:
        'This park in the Uinta Basin is home to a dinosaur quarry where thousands of fossils have been discovered.' +
        ' Most were removed and placed in museums around the world, but around 2,000 remain encased in stone so that' +
        ' tourists can see them the way they were discovered. Scientists think the bones are located here because' +
        ' dinosaur carcasses were washed down river until they stopped on a sand bar and were buried with more' +
        ' sand and silt to become fossilized.',
    slides: {
        indexFileUrl: 'http://images.ethanyoung.us/DinosaurNM2005/DinosaurNM2005Index.xml',
        rootUrl: 'http://images.ethanyoung.us/DinosaurNM2005'
    }
})

module.exports = repository;