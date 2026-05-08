
import {pi} from './pi';

class MyCircle {
  constructor(radius){
    this.radius = radius;
  }
area(){
  return this.radius + this.radius * pi;
}
perimeter() {
  return 2 *pi * this.radius;
}
}


export default MyCircle;
  