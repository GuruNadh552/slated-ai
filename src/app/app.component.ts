import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slated-ai';
  icons : string[] = ['../assets/icons/email.svg','../assets/icons/call.svg','../assets/icons/briefcase.svg']

  socialIcons:any=[
  {
    "iconUrl":"../assets/icons/linkedin.svg",
    "text":"LinkedIn",
    "url":"https://in.linkedin.com/in/gurunadh-pukkalla-1964a8167"
  },
  {
    "iconUrl":"../assets/icons/github.svg",
    "text":"Github",
    "url":"https://github.com/GuruNadh552"
  },
  {
    "iconUrl":"../assets/icons/briefcase.svg",
    "text":"Facebook",
    "url":"#"
  },
  {
    "iconUrl":"../assets/icons/twitter.svg",
    "text":"Twitter",
    "url":"#"
  }]

  data:any={
    email:"guyawah@gmail.com",
    title:"Co-founder Apple",
    phone:"+2 383 282 2822"
  }

  valueChanged(ind:Number,event:any){
    if(ind==0)
      this.data.email = event.target.value;
    else if(ind==1)
      this.data.title = event.target.value;
    else this.data.phone = event.target.value;
    console.log(this.data);
  }

  returnDatafromIndex(ind:Number){
    if(ind==0)
      return this.data.email
    if(ind==1)
      return this.data.title;
    return this.data.phone;
  }
}
