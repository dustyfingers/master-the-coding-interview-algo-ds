what is good code?
1. good code is *readable*
2. good code is *scaleable*

big o gives us a language to use to describe how well code scales


the rules of determining big o for a given function:
1. worst case - when calculating big o, always think about the worst case the algorithm has to go through
2. remove constants - O(1 + n/2 + 100) --> O(n)
3. different terms for inputs - O(n + m) -> for each input to the function
4. drop non dominants - O(n + n^2) => O(n^2)