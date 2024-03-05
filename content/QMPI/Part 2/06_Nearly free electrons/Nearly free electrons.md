---
nextnote: "[[Fermi surfaces and e transport]]"
author: Giacomo, Eva
authorlink: https://github.com/gamberoillecito,https://github.com/deskclam
---
Starting from the [[Free electron model|free electron model]] ($V = 0$) we want to study what happens as the potential slowly increases (but remains weak).

## Zero potential

Even for $V = 0$ we need to consider the periodicity of the potential in order to be able to increase it later. The Bloch states are 

$$
\left( \frac{\hbar^{2}k^{2}}{2m} \right) c_{\vec{k}} + \sum_{\vec{G}} V_{\vec{G}} c_{\vec{k} \cdot \vec{G}} = 0
$$

but, since $V = 0$, $V_{\vec{G}} = 0$ and thus $E = \frac{\hbar^{2}k^{2}}{2m}$ as expected for the free electrons.

This result has to be considered together with the fact that (due to the periodicity of the reciprocal lattice)

$$
E(\vec{k}) = E (\vec{k} + \vec{G}) = \frac{\hbar^{2}}{2m}|k + \vec{G}|^{2}
$$

this implies that we have an infinite number of parabolas ($E$ depends on $k^{2}$) shifted by $\vec{G}$.

![[QMPI/Part 2/06_Nearly free electrons/attachments/periodic potential.png|300]]

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

>[!quote] Ibach Luth, 7.2

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

>  As we can see from the plot above, $\Psi(+)$ piles up electrons on lattice sites (i.e. where the ions are), ***thereby lowering the potential energy in comparison with the average potential energy seen by a traveling wave***. $\Psi(-)$, on the other hand, piles up electrons between the ions ***thereby raising the potential energy in comparison with that seen by a traveling wave***.
>  
>  Kittel, page 166

![[energy gap.svg|600]]

As we can see from the picture above, in the case of a 1D lattice with a weak potential, the energy is similar to the free electron case "far" from the lattice points (where the influence of the ion is weak and thus we are almost in the free electron case). Near the lattice point, on the other hand, the potential of the ions affects more the electrons with low $k$ (the electrons with low energy) and thus the parabola will be "squashed", electrons with higher energy, on the other hand, will "care less" about the weak potential of the lattice and will behave almost as in the free case.

#### Quantitative description

>[!quote] Ibach Luth, 7.2

#todo 

Starting from the Schrödinger equation in *k*-space:

$$ 
\left( \frac{\hbar^{2}\vec{k}^{2}}{2m}-E \right)c_{\vec{k}}+\sum_{\vec{G}}V_{\vec{G}}\cdot c_{\vec{k}-\vec{G}} = 0
$$

we want to estimate the coefficients

$$
\left( E- \frac{\hbar^{2}\vec{k}^{2}}{2m} \right)c_{\vec{k}} =\sum_{\vec{G}}V_{\vec{G}}\cdot c_{\vec{k}-\vec{G}}
$$

and a translation by a reciprocal lattice vector $\vec{k} \to \vec{k}-\vec{G}$ yields

$$ 
 
\left( E- \frac{\hbar^{2}(\vec{k}-\vec{G})^{2}}{2m} \right)c_{\vec{k}-\vec{G}} =\sum_{\vec{G'}}V_{\vec{G'}}\cdot c_{\vec{k}-\vec{G}-\vec{G'}}
$$

considering $\vec{G}''=\vec{G}+\vec{G'}$ :

$$
\displaylines{
\left(E-\frac{\hbar^{2}(\vec{k}-\vec{G})^{2}}{2m} \right)c_{\vec{k}-\vec{G}} =\sum_{\vec{G''}}V_{\vec{G''}}\cdot c_{\vec{k}-\vec{G''}} \\
 
 
c_{\vec{k}-\vec{G}} =\frac{\sum_{\vec{G'}}V_{\vec{G'}}\cdot c_{\vec{k}-\vec{G}-\vec{G'}}}{E-\frac{\hbar^{2}(\vec{k}-\vec{G})^{2}}{2m}}}
$$

$V$ is weak, so the eigenvalues are similar to those found for the free electron, this means that also the energy is nearly the free electron energy ($E=\frac{\hbar^{2}k^{2}}{2m}$).

We also make the assumption that only the largest $c_{\vec{k}-\vec{G}}$ are of interest, in fact we expect the greatest deviation from free electron behaviour when the denominator of the $c_{\vec{k}-\vec{G}}$ relation vanishes:

$$
\displaylines{
E-\hbar^{2}\frac{|\vec{k}-\vec{G}|}{2m} \to 0 \\
\frac{\hbar^{2}\vec{k}^{2}}{2m}-\frac{\hbar^{2}|\vec{k}-\vec{G}|}{2m} \to 0 \\
|\vec{k}|^{2} \simeq |\vec{k}-\vec{G}|^{2}
}
$$

this is the Von Laue (Bragg) condition, the maximum perturbation occurs at the edge of the first Brillouin zone
For this approximation we only need to consider two relations, one is the Bragg condition, the other is when $\vec{G}=0$ and so we consider the $c_{\vec{k}}$ .

Evaluating the coefficients in each condition we have:

1) Bragg:

$$
\begin{align}
\left(E-\frac{\hbar^{2}|\vec{k}-\vec{G}|^{2}}{2m}\right) c_{\vec{k}-\vec{G}} &=\sum_{\vec{G''}}V_{\vec{G''}-\vec{G}}\cdot c_{\vec{k}-\vec{G''}}  \\
&= V_{-\vec{G}}\cdot c_{\vec{k}}+V_{0}\cdot c_{\vec{k}-\vec{G}}+\dots

\end{align}
$$

the other terms are negligible, only $c_{\vec{k}}$ and $c_{\vec{k}-\vec{G}}$ are "big" and significative.

2) $\vec{G}=0$

$$
\begin{align}
\left(E-\frac{\hbar^{2}|\vec{k}|^{2}}{2m}\right)c_{\vec{k}} &=\sum_{\vec{G''}}V_{\vec{G''}}\cdot c_{\vec{k}-\vec{G''}} \\
&=V_{0}\cdot c_{\vec{k}}+V_{\vec{G}}\cdot c_{\vec{k}-\vec{G}}+\dots 
\end{align}
$$

the significant coefficient are again only $c_{\vec{k}}$ and $c_{\vec{k}-\vec{G}}$

Supposing $V_{0}=0$, and putting together the two condition the system is:

$$ 
\begin{cases}
\left(E-\frac{\hbar^{2}|\vec{k}|^{2}}{2m}\right)c_{\vec{k}}-V_{-\vec{G}}\cdot c_{\vec{k}-\vec{G}}=0 \\ \\

\left(E-\frac{\hbar^{2}|\vec{k}-\vec{G}|^{2}}{2m}\right) c_{\vec{k}-\vec{G}} - V_{\vec{G}}\cdot c_{\vec{k}}=0
\end{cases}
$$

this system has solutions if the determinant of the coefficients is zero

$$
\begin{vmatrix}
\frac{\hbar^{2}|\vec{k}|^{2}}{2m}-E & V_{\vec{G}} \\
V_{-\vec{G}} & \frac{\hbar^{2}|\vec{k}-\vec{G}|^{2}}{2m}-E
\end{vmatrix}
=0
$$

The potential is real, and its Fourier coefficients are:

$$
V_{\vec{G}}=\frac{1}{V}\int_{cell}e^{-i\vec{G}\cdot\vec{r}}V(\vec{r})  \, dr
$$

and if the potential is real $V(\vec{r})=V^{*}(\vec{r})$

$$ 
V^{*}_{\vec{G}}=\frac{1}{V}\int_{cell}e^{-i\vec{G}\cdot\vec{r}}V(\vec{r})  \, dr= V_{-\vec{G}}
$$

and so $V_{\vec{G}}\cdot V_{-\vec{G}}=|V_{\vec{G}}|^{2}$.

Defining $E_{\vec{k}}^{0}=\frac{\hbar^{2}|\vec{k}|^{2}}{2m}$ and $E_{\vec{k}-\vec{G}}^{0}=\frac{\hbar^{2}|\vec{k}-\vec{G}|^{2}}{2m}$

The determinant is:

$$ 
\displaylines{
(E_{\vec{k}}^{0}-E)(E_{\vec{k}-\vec{G}}-E)-|V_{\vec{G}}|^{2}=0\\
\dots\\
E=\frac{1}{2}(E_{\vec{k}}^{0}+E_{\vec{k}-\vec{G}}^0)\pm\left[ \frac{1}{4}(E_{\vec{k}}^{0}-E_{\vec{k}-\vec{G}}^0)^{2} +|V_{\vec{G}}|^{2}\right]^{1/2}
}
$$

at the edge of the first Brillouin zone, $c_{\vec{k}}\simeq c_{\vec{k}-\vec{G}}, E_{\vec{k}}^0\simeq E_{\vec{k}-\vec{G}}^{0}$

and substituting in the energy relation above:

$$ 
E_{\pm}=\frac{1}{2}(E_{\vec{k}}^{0}+E_{\vec{k}-\vec{G}}^0)\pm|V_{\vec{G}}|
$$

At the edge the contribution of the two waves with $c_{\vec{k}}$ and $c_{\vec{k}-\vec{G}}$ re equal; the difference between the two energies at the boundary is equal to the band gap:

$$ 
\Delta E=E_{+}-E_{-}=2|V_{\vec{G}}|
$$ 
