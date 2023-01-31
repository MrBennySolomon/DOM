function Square(a, b, c, d){
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  }

  Square.prototype.isSquare = function () {
    return this.b - this.a === this.d - this.c && this.c - this.a === this.d - this.b;
  }

  square = new Square(1, 2, 2, 3);

  console.log(square.isSquare());