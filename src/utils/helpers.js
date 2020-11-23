// helper functions
import url from './URL'


//flatten

export function flattenProducts(data) {
    return data.map(item => {
        //claudinary
        let image = item.image[0].url
        // console.log(item.image.image)
        // //local setup no deployment
      
        // let image = `${url}${item.image.url}`
        return { ...item, image }


    })

}

export function featuredProducts(data) {
    return data.filter(item => {
      return item.featured === true;
    });
  }
  
