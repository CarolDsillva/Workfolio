from sympy import plot_implicit , symbols , Eq
x , y = symbols ('x y')
p1 = plot_implicit(Eq( x ** 2 + y ** 2 , 4 ) ,(x ,-4 , 4 ) ,(y ,-4 , 4 ) ,title = 'Circle : $x^2+y^2=4$ ') # r= 2