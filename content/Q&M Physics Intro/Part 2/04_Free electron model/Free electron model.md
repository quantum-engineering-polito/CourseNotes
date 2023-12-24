
In this chapter we will deal only with the "outer" electrons, since the inner ones behave similarly to the isolated atom.

The complete SE for one electron is 

$$
\displaylines{
\hat{H} \Psi = E \Psi \\
\Psi = \Psi(\vec{r}_{1}\sigma_1, \vec{r}_{2}\sigma_2, \dots, \vec{r}_{n}\sigma _{n})
}
$$

where $\vec{r}_{i}$ are the positions and $\sigma_{i}$ the spins. 

$$
\begin{align}
\hat{H} &= \sum_{i} \Biggl[ \underbrace{ -\frac{\hbar^{2}}{2m} \nabla^{2}_{i} }_{ \text{kinetic} } - 

\underbrace{ z \frac{e^{2}}{4 \pi \varepsilon_0} \sum_{n} \frac{1}{|\vec{r}_{i} - \vec{R}_{n}|} }_{ \substack{\text{electron - nuclei} \\ \text{interaction}} } \Biggr] \\

&+\underbrace{ \frac{1}{2} \sum_{i\neq j} \frac{e^{2}}{4\pi \varepsilon_0 |\vec{r}_{i} - \vec{r}_{j}|} }_{ \substack{\text{electron - electron} \\ \text{interaction}} } 

+ \underbrace{ \text{NUCLEI} }_{ \substack{ \text{kinetic energy} \\ \text{of nuclei} } }
\end{align}
$$

We will always assume the following two approximations:

1) **Born/Oppenheimer** (adiabatic) approximation: electrons and nuclei are decoupled ^129090
2) **Independent electrons**

In the free electron model, we will also assume that the electrons are free, which means that the potential is 0 everywhere.
#todo drawing

## Sommerfeld - Bethe model

This simpler model is useful when the electrons are loosely bound, such as in metals. The electrons are considered to be confined in box of edge $L$ with infinite potential barriers at the edges and a constant $0$ potential inside.

We will consider the case at $T = 0K$ and with $N$ electrons.

The SE will be 

$$
-\frac{\hbar^{2}}{2m} \nabla^{2} \Psi(\vec{r}) + V(\vec{r}) \Psi(\vec{r}) = E \Psi(\vec{r})
$$

with 

$$
V(x,y,z) = \begin{cases}
0 && 0 \leq x,y,z \leq L \\
\infty && \text{outside}
\end{cases}
$$


The boundary conditions are the **Born - Von Karman** or **periodic boundary** conditions:

$$
\begin{cases}
\Psi(x + L, y,z) = \Psi(x,y,z) \\
\Psi(x , y+ L,z) = \Psi(x,y,z) \\
\Psi(x , y,z+ L) = \Psi(x,y,z) 
\end{cases} \tag{1}
$$

>[!note] Boundary conditions explanation omitted

By solving the SE we get that the solution is a plane wave: 

$$
\Psi_{\vec{k}} = c ~e^{ i \vec{k} \cdot \vec{r} }
$$

The normalization constant $c$ can be calculated by imposing 

$$
\displaylines{
\int _{\mathbf{V}} |\Psi_{\vec{k}}(\vec{r})|^{2} \, d\vec{r} = 1 \\
|c|^{2} \int _{\mathbf{V}} e^{ -i \vec{k} \cdot \vec{r} } e^{ i \vec{k} \cdot \vec{r} } \, d\vec{r} = 1 \\
|c|^{2} \int _{\mathbf{V}}  \, d\vec{r} = 1 \\
\Downarrow \\
c = \frac{1}{\sqrt{ \mathbf{V} }}
}
$$
where $\mathbf{V} = L^{3}$ is the volume of the cube.

### Eigenvalues

$$
\begin{align}
E &= \braket{ \Psi | \hat{H} | \Psi }
\\\\
&= \frac{1}{\sqrt{ \mathbf{V} }} \int _{\mathbf{V}} \frac{q}{\sqrt{ \mathbf{V} }} e^{  -i \vec{k} \vec{r} }
\left( - \frac{\hbar^{2}}{2m} \nabla^{2} \right)
\frac{1}{\sqrt{ \mathbf{V} }} e^{ i \vec{k} \vec{r} }\, d\vec{r}  \\\\
&= \frac{\hbar^{2}}{2m \mathbf{V}} |\vec{k}|^{2} 
\underbrace{ \int _{\mathbf{V}} e^{  -i \vec{k}\vec{r} } e^{ i \vec{k} \vec{r} }\, d\vec{r}}_{ \mathbf{V} }  
\\
&= \frac{\hbar^{2}k^{2}}{2m} = E_{k}
\end{align}
$$

### Boundary conditions

The BVK conditions are satisfied by imposing each of the three conditions $(1)$. Doing this for the first one results in: 

$$
\begin{align}
\Psi(x + L, y, z) &= \frac{1}{\sqrt{ \mathbf{V} }} e^{ i (k_{x}x + k_{x}L + k_{y}y +k_{z}z) }  \\
&= \frac{e^{ i k_{x}L }}{\sqrt{ \mathbf{V} }} ~ e^{ i (k_{x}x + k_{y}y +k_{z}z) }  \\
&= e^{ i k_{x} } \Psi(x,y,z)
\end{align}
$$
which means that the exponential has to be equal to $1$ and thus 

$$
k_{x} = \frac{2\pi n_{x}}{L} \qquad n_{x} \in \mathbb{Z}
$$

The same is true for $k_{y}$ and $k_{z}$: 

$$
k_{y} = \frac{2\pi n_{y}}{L} \qquad n_{y} \in \mathbb{Z}
$$

$$
k_{z} = \frac{2\pi n_{z}}{L} \qquad n_{z} \in \mathbb{Z}
$$


Notice that since $L$ is a macroscopic value, the $k$s are **quasi-continuous**.

### Density of states

The density of states is defined as the *number of electronic states per unit energy and unit volume*: 

$$
D(E) = \frac{1}{\mathbf{V}} \frac{dN(E)}{dE} \quad [cm^{-3} \cdot eV^{-1}] \tag{2}
$$

#todo add drawing

The volume of the single state (in green) is given by $(2\pi/L)^{3} = 8\pi^{2} /\mathbf{V}$.

If we define $\Omega$ as the generic volume in k-space then the number of states is given by 

$$
\text{\# of states} = \frac{\Omega}{8\pi^{3} / L^{3}} = \frac{\Omega \mathbf{V}}{8\pi^{3}}
$$

Because of the spin degeneracy, each state contains two electrons, thus: 

$$
N(E) = 2 \frac{\frac{4}{3} \pi k^{3}}{8\pi^{3}/V} = \frac{\mathbf{V}k^{3}}{3\pi^{2}}
$$

Remembering the value of the energy $E = \hbar^{2}k^{2}/2m$ and obtaining $k$ from it, we get 

$$
N(E) = \frac{\mathbf{V}}{3\pi^{2}} \left( \frac{2mE}{\hbar^{2}} \right)^{1/2}
$$

Calculating the DOS from $(2)$ we get: 

$$
D(E) = \frac{1}{\mathbf{V}} \frac{dN}{dE} = \frac{1}{\cancel{ \mathbf{V} }} \frac{\cancel{ \mathbf{V} }}{\cancel{ 3 }\pi^{2}} \left( \frac{2m}{\hbar^{2}} \right)^{3/2} \frac{\cancel{ 3 }}{2} E^{1/2}
$$
Finally, the DOS for the **free electron gas** is

$$
D(E) = \frac{m}{\pi^{2}\hbar^{2}}\left( \frac{2mE}{\hbar^{2}}^{1/2} \right) \propto \sqrt{ E }
$$

#todo add drawing

#todo add fermi dirac drawing

#todo pagg 16/17 bianco ???


### Energy of Fermi gas @ T = 0K

#todo 

### Density of states: general formula

$$
\begin{align}
dN &= D(E) dE  \\
&= \frac{2 \cdot \text{(\# of electrons between E and E + dE)}}{\mathbf{V}}  \\
&= \frac{2}{\mathbf{V}} \frac{\int_{E}^{E + dE} \, d\vec{k} }{8\pi^{3}/\mathbf{V}}  \\
&= \frac{1}{4\pi^{3}}\int_{E}^{E + dE}  \, d\vec{k} 
\end{align}
$$

#todo add drawing and explanation

### Fermi gas @ T > 0K



$$
f(E,T) = \frac{1}{e^{ (e-\mu)/k_{b}T } + 1}
$$


$$
\lim_{ \substack{ n } \to 0 } f(E,T) = \begin{cases}
0 && E > \mu \\
1 && E < \mu
\end{cases}
$$


$$
\mu(T = 0K) = E_F
$$

#todo add plots

What we want to do now is estimate the width of the region where the Fermi-Dirac varies. 

If we impose $y \equiv f$ and $x \equiv E$, this can be done by approximating the slope with the tangent line in $E = \mu$ and calculating the intersections with $y = 1$ and $y = 0$.


$$
\displaylines{
\frac{df(E,T)}{dE} = - \frac{1}{\left( e^{ \frac{E-\mu}{K_{B}T} }+ 1 \right)^{2}} e^{ \frac{E-\mu}{k_{B}T} } \frac{1}{k_{B}T} \\ 
\frac{df}{dE}\Biggr|_{E = \mu} = - \frac{1}{4k_{B}T}
}
$$

From the equation of the straight line $y = ax + b$ we need to find:

$$
a = \frac{1}{4k_{B}T}
$$

and, since $y(\mu) = 1/2$:

$$
\displaylines{
\frac{1}{2} = -\frac{\mu}{4k_{B}T} + b \\ b = \frac{\mu}{4k_{B}T} + \frac{1}{2}
}
$$

We finally get: 

$$
y = -\frac{1}{4k_{B}T} x + \frac{\mu}{4k_{B}T} + \frac{1}{2}
$$
If we calculate the interceptions with the two horizontal lines $y = 1$ and $y = 0$ we that they are located at: 

$$
x_{\pm} = \mu \pm 2k_{B}T
$$

and so the range where $f$ varies is equal to $4k_{B}T$ which is much smaller than $E_F$, so: 

$$
f(E,T) \simeq e^{ -\frac{E - \mu}{k_{B}T} } \quad \text{for} \quad |E - E_F| \gg k_{B}T
$$

#todo thermal properties in metals (pag 25)

## Dulong-Petite law

#todo 


---

Read Next [[Bloch theorem]]