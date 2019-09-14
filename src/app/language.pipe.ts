import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  languageSet = {
    telugu: {
      Login: 'లాగిన్',
      Body: 'శరీర',

      SignUp: 'నమోదు',

      Dummy: 'డమ్మి',

      Pagination: 'పేజీ సంఖ్య',
    },
    hindi: {
      Login: 'लॉग इन करें',
      Body: 'तन',

      SignUp: 'साइन अप करें',

      Dummy: 'डमी',

      Pagination: 'पृष्ठ पर अंक लगाना',
    },
    tamil: {
      Login: 'உள்நுழைய',
      Body: 'tamil Body',

      SignUp: 'tamil SignUp',

      Dummy: 'tamil Dummy',

      Pagination: 'tamil Pagination',
    }
  }

  transform(value: any, ...args: any[]): any {

    let language= 'tamil';
    if(localStorage.getItem('language')){
      language = localStorage.getItem('language');
    }

    if (this.languageSet[language][value]) {
      return this.languageSet[language][value];
    }
    return 'Custom Pipes';
  }

}
