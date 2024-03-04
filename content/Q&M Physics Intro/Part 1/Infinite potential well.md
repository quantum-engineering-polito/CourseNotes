
We have the following potential 

$$
V(x) = \begin{cases}
0 & 0 \leq x \leq a \\
\infty & \text{otherwise}
\end{cases}
$$
The particle is bound into the well by the infinite potential and thus the wave function vanishes for $x< 0$ and $x > a$. For this reason the following boundary conditions must be satisfied for the wave function to be continuous.

$$
\begin{cases}
\Psi(0) = 0 \\
\Psi(a) = 0
\end{cases}
$$

Writing the SE for the region inside the well (outside it is 0) we get:

$$
-\frac{\hbar^{2}}{2m} \partial_{x}^{2} \Psi(x,t) = i\hbar \frac{ \partial \Psi(x,t) }{ \partial t } 
$$

To find the wave function we can solve the TISE

$$
\hat{H} \Psi(x) = E \Psi(x)
$$

which is to say 

$$
-\frac{\hbar^{2}}{2m}\partial_{x}^{2}\Psi(x) = E \Psi(x)
$$

By moving the constants to the right side and imposing 

$$
k = \sqrt{ \frac{2mE}{\hbar^{2}} } \tag{1}
$$

we get 

$$
\partial_{x}^{2} \Psi(x) = - k^{2}\Psi(x)
$$

which has solutions 

$$
\Psi(x) = A \sin(kx)  + B\cos( kx) 
$$

Now that we have the general form we need to apply the boundary conditions described above. From the first one we get 

$$
A \sin( 0 ) + B \cos(0) = 0 \implies B = 0 
$$

and from the second one 

$$
A\sin(ka) = 0
$$
The solution with $A = 0$ has to be discarded (otherwise the wave function would vanish) and so the only remaining option is to have $\sin(ka) = 0$ which is satisfied for 

$$
k_{n} = \frac{n\pi}{a} \qquad n = 1,2,3,\dots
$$

From this, and from $(1)$ we get that the allowed energy values are 

$$
E_{n} = \frac{n^{2}\hbar^{2}\pi^{2}}{2ma^{2}}
$$

We still need to normalize the wave function (we still have to find $A$). If we do so we get 

$$
A = \sqrt{ \frac{2}{a} }
$$

