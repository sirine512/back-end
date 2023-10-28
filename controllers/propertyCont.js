const property = require("../models/property")
const express = require("express")
const app = express()

exports.createProperty = async (req, res) => {
  try {
    const { type, functionality, location, price, roomNumber, description,imgUrl} = req.body;
    //create new property
    const newProperty = new property({
      type: type,
      functionality: functionality,
      location: location,
      price: price,
      roomNumber: roomNumber,
      description: description,
      imgUrl:imgUrl,
    }
    );
    await newProperty.save()
  } catch (err) {
    console.log(err)
  }
};
//Create properties
exports.allProperties = async (res, req) => {
  const properties = [
    {
      type: "Apartment",
      functionality: "Renting",
      location: "Tunis",
      price: "700",
      roomNumber: "2",
      description: "A modern apartment with 2 bedrooms",
      imgUrl:"https://images.adsttc.com/media/images/5be3/3a40/08a5/e549/e300/0315/large_jpg/42442.jpg?1541618191",
    },
    {
      type: "House",
      functionality: "Selling",
      location: "Paris",
      price: "500000",
      roomNumber: "3",
      description: "A beautiful house in the heart of Paris with 3 bedrooms and a garden",
      imgUrl:"https://media.architecturaldigest.com/photos/5eb199eef7a346022caf3e96/16:9/w_3823,h_2150,c_limit/3317-08.jpg",
    },
    {
      type: "Condo",
      functionality: "Renting",
      location: "New York",
      price: "2000",
      roomNumber: "1",
      description: "A modern condo in the heart of New York City, perfect for city living",
      imgUrl:"https://thumbs.cityrealty.com/assets/smart/0x0/webp/7/77/7734d3861ca7f9eb75d1bed0fd31df12c77aa6e1/one-madison-23-east-22nd-street-00.jpg",
    },
    {
      type: "Villa",
      functionality: "Selling",
      location: "Los Angeles",
      price: "1000000",
      roomNumber: "4",
      description: "A luxurious villa with 4 bedrooms, a pool, and stunning views",
      imgUrl:"https://cdn.luxuo.com/2017/01/los-angeles-3.jpg",
      
    },
    {
      type: "Studio",
      functionality: "Renting",
      location: "London",
      price: "900",
      roomNumber: "0",
      description: "A cozy studio apartment in the heart of London",
      imgUrl:"https://www.beststudenthalls.com/media/room/diamond-studio-19/257416.1600x1200_q85.jpg",
     
    },
    {
      type: "House",
      functionality: "Selling",
      location: "Miami",
      price: "750000",
      roomNumber: "4",
      description: "A spacious family house with 4 bedrooms, a backyard, and a garage",
      imgUrl:"https://www.mcdonaldjoneshomes.com.au/sites/default/files/styles/hero_image/public/miami-executive-single-storey-home-design-lumiere-facade_1.jpg?itok=s049SNFu",
      
    },
    {
      type: "Apartment",
      functionality: "Renting",
      location: "San Francisco",
      price: "2800",
      roomNumber: "1",
      description: "A trendy loft-style apartment in the heart of San Francisco's tech district",
      imgUrl:"https://www.idesignarch.com/wp-content/uploads/Custom-Loft-Apartment-Dogpatch-San-Francisco_1.jpg",
      
    },
    {
      type: "Condo",
      functionality: "Selling",
      location: "Chicago",
      price: "450000",
      roomNumber: "2",
      description: "A modern condo with 2 bedrooms and a view of Lake Michigan",
      imgUrl:"https://www.hotspotrentals.com/wp-content/uploads/2021/06/Coast-Chicago-luxury-apartments-kitchen-lake-view.jpg",
      
    },
    {
      type: "Villa",
      functionality: "Selling",
      location: "Beverly Hills",
      price: "1000000",
      roomNumber: "5",
      description: "An opulent villa with 5 bedrooms, a pool, and a movie theater",
      imgUrl:"https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F2b3100da-52d2-43cb-91f3-7cbcf9bdecef.png?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1",
      
    },
    {
      type: "Apartment",
      functionality: "Renting",
      location: "Sydney",
      price: "1200",
      roomNumber: "2",
      description: "A waterfront apartment with 2 bedrooms and stunning harbor views",
      imgUrl:"https://www.meriton.com.au/wp-content/uploads/WEB-1920px_JJG_9930-1623x1080.jpg",
      
    }, {
      type: "House",
      functionality: "Selling",
      location: "Austin",
      price: "600000",
      roomNumber: "3",
      description: "A charming family house with 3 bedrooms, a backyard, and a home office",
      imgUrl:"https://media.architecturaldigest.com/photos/5eb199eef7a346022caf3e96/16:9/w_3823,h_2150,c_limit/3317-08.jpg",
      
    },
    {
      type: "Apartment",
      functionality: "Renting",
      location: "Tokyo",
      price: "3200",
      roomNumber: "1",
      description: "A modern apartment in the heart of Tokyo's business district",
      imgUrl:"https://media.architecturaldigest.com/photos/646f946415801cb260582fa9/3:2/w_3576,h_2384,c_limit/Aman%20Tokyo,%20Japan%20-%20Accommodation,%20view%20from%20the%20room_31648.jpg",
      
    },
    {
      type: "Condo",
      functionality: "Selling",
      location: "Miami",
      price: "550000",
      roomNumber: "2",
      description: "A beachfront condo with 2 bedrooms and ocean views",
      imgUrl:"https://www.miamiluxuryhomes.com/wp-content/uploads/2018/03/Faena-House-Condos-Balcony.jpg",
      
    },
    {
      type: "Villa",
      functionality: "Selling",
      location: "Mallorca",
      price: "1000000",
      roomNumber: "6",
      description: "A luxurious Mediterranean villa with 6 bedrooms, a pool, and sea views",
      imgUrl:"https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1294i215%2F6a8fpp3e2vp44sjakwnbxxz3x2i215&option=N&idlisting=listingmedia&w=1200&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fstatic-sir-legacysir-production-0.gtsstatic.net%2Fresources%2F_responsive%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg",
      
    },
    {
      type: "Apartment",
      functionality: "Renting",
      location: "Hong Kong",
      price: "1800",
      roomNumber: "2",
      description: "A high-rise apartment with 2 bedrooms and city skyline views",
      imgUrl:"https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2022/08/24/708c787c-1101-4380-81e2-49c63c6fcd95_4ffecfeb.jpg",
      
    },
  ];
  try {
    var response = await property.create(properties)
    console.log("properties created:", response)
    req.json(response)
  } catch (error) {
    console.log(error)
  }
};

//All properties 
exports.all = async (req, res) => {
  try {
    const all = await property.find()
    console.log(all)
    res.json(all)
  } catch (err) {
    console.log(err)
  }
};

//Selling properties
exports.buy = async (req, res) => {
  try {
    const selling = await property.find({
      functionality:"Selling"})
    console.log(selling)
    res.json(selling)
  } catch (err) {
    console.log(err)
  }
};

//Buy Filter
exports.buyFilter = async (req, res) => {
  try {
    
    const { types, priceRange, numberOfRooms } = req.body;
    console.log('Types:', types);
    console.log('Price Range:', priceRange);
    console.log('Number of Rooms:', numberOfRooms);

    
    const query = {
      functionality: 'Selling',
    };

    if (types && types.length > 0) {
      query.type = { $in: types };
    }

    if (priceRange) {
      query.price = { $gte: priceRange[0], $lte: priceRange[1] };
    }

    if (numberOfRooms && numberOfRooms.length > 0) {
      query.roomNumber = { $in: numberOfRooms };
    }

    const result = await property.find(query);
    console.log('Query:', query);
    res.json(result);
  } catch (err) {
    console.log('Error:', err);
    res.status(500).json({ error: 'an error occurred while filtering buying properties.'});
  }
};


//Renting properties
exports.rent = async (req, res) => {
  try {
    const renting = await property.find({
      functionality:"Renting"})
    console.log(renting)
    res.json(renting)
  } catch (err) {
    console.log(err)
  }
};


//Renting Filter
exports.rentFilter = async (req, res) => {
  try {
    
    const { types, priceRange, numberOfRooms } = req.body;
    console.log('Types:', types);
    console.log('Price Range:', priceRange);
    console.log('Number of Rooms:', numberOfRooms);

    
    const query = {
      functionality: 'Renting',
    };

    if (types && types.length > 0) {
      query.type = { $in: types };
    }

    if (priceRange) {
      query.price = { $gte: priceRange[0], $lte: priceRange[1] };
    }

    if (numberOfRooms && numberOfRooms.length > 0) {
      query.roomNumber = { $in: numberOfRooms };
    }

    const result = await property.find(query);
    console.log('Query:', query);
    res.json(result);
  } catch (err) {
    console.log('Error:', err);
    res.status(500).json({ error: 'an error occurred while filtering renting properties.'});
  }
};




//Find properties by id
exports.findId = async (req, res) => {
  
  // const propertyId = req.id

  try {
    console.log(req.params.id)

    const result = await property.findById(req.params.id);
    console.log(result)
    res.json(result );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "an error occurred while fetching find by Id results." });
  }
};



//Find Properties by location
exports.search = async (req, res) => {
  const searchQuery = req.query.query;
  try {
    const searchResults = await property.find({ location: searchQuery });
    res.json({ data: searchResults });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error:"an error occurred while fetching search results." });
  }
};

