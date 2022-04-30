import {AsyncStorage} from 'react-native';

export const storeDate = (data) => {
    try{
        AsyncStorage.setItem('APPDATA',JSON.stringify(data));
        return "stored it!"

    }
catch (e){
    throw e;
}
   

}

export const getData = () =>{
    return new Promise((resolve,reject)=> {
        AsyncStorage.getItem('APPDATA').then(value => {
            if (value !== null){
                resolve(value);
            }
            else{
                reject(Error('something went wrong!'));
            }
        });

    });

}