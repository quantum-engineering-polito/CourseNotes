
Starting from the [[Free electron model|free electron model]] ($V = 0$) we want to study what happens as the potential slowly increases (but remains weak).

## Zero potential

For $V = 0$ the Bloch states are 

$$
\left( \frac{\hbar^{2}k^{2}}{2m} \right) c_{\vec{k}} + \sum_{\vec{G}} V_{\vec{G}} c_{\vec{k} \cdot \vec{G}} = 0
$$

but, since $V = 0$, $V_{\vec{G}} = 0$ and thus $E = \frac{\hbar^{2}k^{2}}{2m}$ as expected for the free electrons.

This result has to be considered together with the fact that  ( #todo where does this come from?) 

$$
E(\vec{k}) = E (\vec{k} + \vec{G})
$$

this implies that we have an infinite number of parabolas ($E$ depends on $k^{2}$) shifted by $\vec{G}$.

#todo add plot

As we can see from the plot above, we can shift everything inside the first BZ to get what is called **reduced zone scheme**.

## Potential different from zero

If $V \neq 0$ we expect [[Reciprocal lattice#Bragg formulation|Bragg reflections]] associated with the [[Reciprocal lattice#Von Laue formulation|Von Laue condition]]: 

$$
|\vec{k}|^{2} = |\vec{k} - \vec{G}|^{2}
$$

### 1D example

In case of a 1D crystal with spacing $a$ [[Reciprocal lattice#Theorem|we get]] $G = 2n \pi/a$ and the Von Laue condition becomes: 

$$
k^{2} = (k - G)^{2}
$$

which means 

$$
\displaylines{
{\color{red} \pm}  k = {\color{blue} \pm}  (k - G) \\
\Downarrow \\
\begin{align}
 & \begin{cases}
{\color{red} +}{\color{blue} +}  \\
{\color{red} -}{\color{blue} -}  \\
\end{cases} \implies G = 0
\\\\
 & \begin{cases}
{\color{red} +}{\color{blue} -}  \\
{\color{red} -}{\color{blue} +}  
\end{cases} \implies k = \pm \frac{G}{2} = \pm ~n \frac{\pi}{a}
\end{align}
}
$$

#todo page 165 kittel/page 5 bianco



