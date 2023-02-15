#include <string>
#include <iostream>

int factorial (int num) {
    // if (num < 0) {return 0;}
    // // c++ has no "undefined" value so we're just gonna return 0

    // else if (num == 0) {return 1;}
    
    // else if (num == 1) {return num;}

    // else {return num*factorial(num-1);}

    switch (num)
    {
    case 0:
        return 1;
        break;
    
    case 1:
        return num;
        break;
    
    default:
        if (num < 0)
        {
            /* code */
            return 0;
        } 
        else return num*factorial(num-1);
        break;
    }
};

int main() {
    std::cout << factorial(3) << "\n"; // output: 6
    std::cout << factorial(5) << "\n"; // output: 120
    std::cout << factorial(0) << "\n"; // output: 1
    std::cout << factorial(-5) << "\n"; // output: 0
}