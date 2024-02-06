---
nextnote: "[[Landauer effect]]"
author: BabelDev0
authorlink: https://github.com/BabelDev0
draft: false
---
In a quantum wire we have 

$$ 
\displaylines{
D_{f}+D_{c}=3 \\\\
D_{f}=1 ; \ D_{c}=2
}
$$

We have 2 dimension of confinement and one degree of freedom for electrons.

![[Quantum Wire.png|400]]

Let's start from the Schrödinger equation

$$
-\frac{\hbar}{2m} \nabla^{2} \Psi(\bar{r})+V(\bar{r})\Psi(\bar{r}) = E \Psi (\bar{r})
$$

We separate in components the potential:

$$
\displaylines{
V(\bar{r}) = V(x)+V(y)+V(z)
\\\\
V_{z} = 0
\\\\
V_{x},V_{y}=\begin{cases}  
0 && -\frac{a_{x}}{2} \leq x \leq \frac{a_{x}}{2} \text{ and } -\frac{a_{y}}{2} \leq y \leq \frac{a_{y}}{2}\\\\
\infty && \text{otherwise}\\
\end{cases}
}
$$

As we did before (in other scenarios) we solve separately the three dimensions and we sum up the energies and multiply the wavefunctions to get the overall solutions

Along $z$ direction:

$$
\psi(z) = \frac{1}{\sqrt{ L_{z} }} e^{ i k_{z} \bar{r} } \qquad E_{z} = \frac{\hbar^{2} k_{z}^{2}}{2m}
$$

Along $x,y$ directions, due to the fact that the potential goes to the infinity at the edges we have the boundary conditions:

$$
\psi_{x}\left( -\frac{a_{x}}{2} \right)=\psi_{x}\left( \frac{a_{x}}{2}\right)=\psi_{y}\left( -\frac{a_{y}}{2} \right)=\psi_{y}\left( \frac{a_{y}}{2} \right) = 0
$$

so the solutions are:

$$
\displaylines{
\psi_{x} = \sqrt{\frac{2}{ a_{x} }}\sin\left( \frac{n_{x}\pi x}{a_{x}} \right)
\\\\
\psi_{y} = \sqrt{\frac{2}{a_{y} }}\sin\left( \frac{n_{y}\pi y}{a_{y}} \right)
}
$$

**These (unlike in $z$) are stationaries waves. They do not propagate in space but they are confined in $x,y$**

![[stationary_states.png|400]]


The total energy will be:

$$
\displaylines{
E = E_{x}+E_{y}+E_{z}
\\\\
E = \frac{\hbar^{2}\pi^{2}n^{2}_{x}}{2ma_{x}^{2}}+
\frac{\hbar^{2}\pi^{2}n^{2}_{y}}{2ma_{y}^{2}}
+\frac{\hbar^{2}k_{z}}{2m}
}
$$

![[energy_bands.png|400]]

How many states are there in the parabola? To calculate them we need to apply conditions also in the $z$ direction. The typical conditions that we apply when we want to avoid to deal with surfaces are periodic boundary conditions.

![[PBC.png|500]]

Due to the boundary condition we get that:

$$
k_{z} = \frac{2\pi}{L_{z}}n_{z} \quad n_{z}=0,\pm 1,\pm 2, \dots
$$

![[PBC_in_bands.png|400]]

# DOS

Starting from the first band $n_x,n_{y}=1$ we can write:

$$
D(E) = \frac{1}{L} \frac{dN(E)}{dE} \quad \left[ \frac{1}{cm \cdot eV} \right]
$$

We can find $N(E)$ geometrically reasoning on the following picture.

![[DOS_Quantum_wire.svg|500]]

$$
N(k) = \frac{2k}{\frac{2\pi}{L_{z}}}\cdot 2 = \frac{2k}{\pi} L_{z}
$$

Recalling the relation between $E$ and $k$ we get:

$$
\displaylines{
k = \sqrt{ \frac{2mE}{\hbar^{2}} }
\\\\
N(E) = \frac{2}{\pi} \sqrt{\frac{2mE}{\hbar^{2}}} L_{z}
\\\\
D(E) = \frac{2}{\pi} \sqrt{\frac{2m}{\hbar^{2}}} \frac{1}{\sqrt{ E }}
}
$$

![[DOS_1D_1BAND.png|400]]

We can now add the other bands

![[DOS_1D.png|400]]