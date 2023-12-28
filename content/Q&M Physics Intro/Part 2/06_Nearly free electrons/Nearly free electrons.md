
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

![[reduced zone scheme.svg|400]]

As we can see from the plot above, we can shift everything inside the first BZ to get what is called **reduced zone scheme**.

## Potential different from zero

If $V \neq 0$ we expect [[Reciprocal lattice#Bragg formulation|Bragg reflections]] associated with the [[Reciprocal lattice#Von Laue formulation|Von Laue condition]]: 

$$
|\vec{k}|^{2} = |\vec{k} - \vec{G}|^{2}
$$

> We know that Bragg reflection is a characteristic feature of wave propagation in crystals. Bragg reflection of electron waves in crystals is the cause of energy gaps. [...] These energy gaps are of decisive significance in determining whether a solid is an insulator or a conductor. We explain physically the origin of energy gaps in the simple problem of a linear solid of lattice constant a.
> 
> Kittel, page 164

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

For the first Bragg reflection ($k = 1$) we can write $\Psi$ as the linear combination of the two standing waves

#todo WHYYYYYYYYYYYYYY?????????????
 
$$
\displaylines{
\Psi(+) \propto e^{ i x\pi/a } + e^{ -i x\pi/a } = 2 \cos\left( \frac{\pi}{a}x \right)\\
\Psi(-) \propto e^{ i x\pi/a } - e^{ -i x\pi/a } = 2 i\sin\left( \frac{\pi}{a}x \right)
}
$$
> The standing waves are labelled $(+)$ or  $(-)$ according to whether or not they change sign when $-x$ is substituted for $x$. Both standing waves are composed of equal parts of right- and left-directed traveling waves. 
> 
> Kittel, page 165

#### Electronic density

>The two standing waves $\Psi(+)$ and $\Psi(-)$ pile up electrons at different regions, and therefore the two waves have different values of the potential energy in the field of the ions of the lattice. This is the origin of the energy gap. 
>
>Kittel, page 165

We have, in fact, that the electronic density $\rho$ is given by $|\Psi|^{2}$, which, for the two wavefunctions above, results in 

$$
\displaylines{
\rho(+) \propto |\Psi(+)|^{2} \propto \cos^{2}\left( \frac{\pi}{a}x \right) \\
\rho(-) \propto |\Psi(-)|^{2} \propto \sin^{2}\left( \frac{\pi}{a}x \right)
}
$$

![[electron distribution.png|500]]

As we can see from the plot above, $\Psi(+)$ piles up electrons on lattice sites (i.e. where the ions are), ***thereby lowering the potential energy in comparison with the average potential energy seen by a traveling wave***.
$\Psi(-)$, on the other hand, piles up electrons between the ions ***thereby raising the potential energy in comparison with that seen by a traveling wave***.

![[energy gap.svg|600]]

#todo calculation of the energy gap