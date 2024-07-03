require('dotenv').config({ path: '.env' });
const mongoose= require ("mongoose");
const uri= process.env.MONGO_URI;
mongoose.connect(uri, {  })
    .then(async () => {console.log("mongodb connected");
const Person = require ("./person")

   
    const arrayOfPeople=[ 

        { name: 'Asma', age: 33, favouriteFood: ['burritos', 'Burger'] },
        { name: 'slim', age: 25, favouriteFood: ['burritos', 'chocolat'] },
        { name: 'wahiba', age: 32, favouriteFood: [' pizza', 'burritos'] }
    ]
    /*try { const people =await Person.create(arrayOfPeople)
        console .log("person is created:", people)
        
    } catch (error) {console.error('error:', error)
        
    }
  /*  const findPerson= await Person.findOne( {name: 'Asma'}).exec();
    console.log('person was founded by name:', findPerson);*/

   /* const findfavouriteFood = await Person.findOne( {favouriteFood :'Burger'}).exec();
    console.log('person was founded by favouriteFood:', findfavouriteFood)



  /*  const personId= '668528774ba82e8d47e369bd';
    const findById = await Person.findById( personId).exec();
    console.log('person was founded by Id:', findById);*/


     /*const Idperson="6685203c085818bd7515c8b1";
     const findId = await Person.findById(Idperson) ;
     if ( findId ) { findId.favouriteFood.push ("humburger")
        await findId.save()
        console .log('new food added')
     }
    
else { console.log("person not found")}

    */

   /* const personNameToUpdate='slim'
    const updatedPerson=await Person.findOneAndUpdate(
        { name: personNameToUpdate },
        { age: 20 },
        { new: true }
      ).exec();
    console.log('updated', updatedPerson)*/
    
    
/*const personDelete="6685203c085818bd7515c8b2"
const deletePerson = await Person.findOneAndDelete(personDelete).exec();
console.log("delete person",deletePerson );*/


/*const nameDelete="slim"
const deleteName = await Person.deleteMany({name : nameDelete}).exec();
console.log("delete all",deleteName )*/



const findNames = await Person.find( {favouriteFood :'burritos'}).sort({ name: 1 }) .limit(2).select('age') .exec()
   console.log ("persons finded", findNames)
})


    .catch(err => console.error('Error connecting to MongoDB:', err));


