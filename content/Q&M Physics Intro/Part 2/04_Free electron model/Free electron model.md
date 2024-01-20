---
nextnote: "[[Bloch theorem]]"
author: Giacomo, Eva
authorlink: https://github.com/gamberoillecito,https://github.com/deskclam
---
>[!quote] Where *Ibach Luth* is mentioned we refer to
>Ibach Luth
>*Solid-State Physics
>An Introduction to Principles of Materials Science*
>Fourth Edition

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

![[periodic potential.png|300]]

## Sommerfeld - Bethe model

>[!note] This should correspond to the [[Models#Free and independent electron model|free and independent electron model]] from condensed matter 

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

### Energy eigenvalues

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

>[!quote] Ibach Luth, 6.2

The internal energy density $u$ can be calculated as
$$
\begin{align}
u &= \int_{0}^{E_F} D(E) E \, dE  \\
&= \frac{m}{\pi^{2}\hbar^{2}}\left( \frac{2m}{\hbar^{2}} \right)^{1/2} \int_{0}^{E_F} E^{3/2}  \, dE \\
&= \frac{m}{\pi^{2}\hbar^{2}}\left( \frac{2m}{\hbar^{2}} \right)^{1/2} \frac{E_F^{5/2}}{5/2} \\
&\overset{*}{=} \frac{\cancel{ m }}{\pi^{2}\cancel{ \hbar^{2} }}\left( \frac{2\cancel{ m }}{\cancel{ \hbar^{2} }} \right)^{1/2} \left( \frac{\cancel{ \hbar^{2} }}{2\cancel{ m }} \right)^{3/2} 3 \pi^{2} n E_F \frac{2}{5}  \\  
&\big\Downarrow \\
u &= \frac{3}{5}n E_F
\end{align} 
$$

In $*$ we used the fact that $E_F^{3/2} = (\hbar^{2}/2m)^{3/2} 3\pi^{2} n$ ( #todo where does it come from?).

From this we can see that, as a consequence of the Pauli exclusion principle, even at $T = 0K$ the energy of the gas is non zero.

Since $u$ is orders of magnitude higher than the internal energy of a **classical** gas (Boltzmann) at $T = 300K$, we can study the conduction electron gas regardless of the effects of the temperature.

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
f(E,T) = \frac{1}{\exp[(e-\mu)/k_{b}T] + 1}
$$


$$
\lim_{ \substack{ T } \to 0 } f(E,T) = \begin{cases}
0 && E > \mu \\
1 && E < \mu
\end{cases}
$$


$$
\mu(T = 0K) = E_F
$$

![[fermidirac.excalidraw.svg|300]]

What we want to do now is estimate the width of the region where the Fermi-Dirac varies. 

>[!quote] Ibach Luth, 6.3

![[deltaE fermi dirac.svg|500]] ^1e2627

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

Which is a classical **Boltzmann distribution**

## Thermal properties in classical gas

The internal energy of a classical gas of $N$ particles is 

$$
U = \frac{3}{2} N k_{B}T
$$

and its internal energy density is 

$$
u = \frac{U}{\mathbf{V}} = \frac{3}{2} \frac{N}{\mathbf{V}}k_{B}T = \frac{3}{2}n k_{B}T \qquad k_{B} = \frac{R}{N_{A}}
$$


The specific heat is given by 

$$
\boxed{ c_{V} = \frac{ \partial u }{ \partial T } \Bigg|_{\mathbf{V}}  = \frac{3}{2}nk_{B} }
$$

## Thermal properties in metals

>[!quote] Ibach Luth, 6.4

From what we just saw, we would expect that the specific heat of the electron gas would increase linearly with the number of electrons but experiments show that this is not the case. What we observe is that metals follow the **Dulong-Petit** law, where the specific heat tends to a constant value $3R$ as temperature increases.

The reason is simple: electrons, in contrast to a classical gas, can only gain energy if they can move into free states in their energetic neighbourhood. The number of such electrons, expressed as a fraction of the total. 

Looking at what we saw [[#^1e2627|before]], this can be expressed as the fact that the electrons that can "move" are only the ones in the region $\Delta E$, which is much smaller that $E_F$.

![[dulong petit.png|300]]

We now want to show that the specific heat of the electrons is negligible compared to the one of the lattice.

To do this we want to calculate $c_V$ of the electrons. First of all we need the internal increase in internal energy density $\Delta{u(T)}$ 

$$
\Delta{u(T)} = \int_{0}^{+\infty} E D(E) f(E,T) \, dE-\int_{0}^{+\infty}ED(E) \, dE \tag{3}  
$$
Where the second integral is the density of internal energy at $T=0K$ 
And, from the definition of specific heat, deriving $(3)$ we get 

$$ 
c_{V} = \frac{ \partial u }{ \partial T } \Bigg|_{\mathbf{V}} = \int_{0}^{+\infty} E D(E) \frac{ \partial f }{ \partial T } \, dE \tag{4} 
$$

In order to simplify the calculation we can exploit the following relation:

$$ 
E_{F} \frac{\partial{n}}{\partial T} =0= E_{F} \int_{0}^{\infty} D(E)\frac{ \partial{f(E,T)}}{\partial{T}} \, dE 
\tag{5} $$

Where n is the total concentration of free electrons, which derived is 

$$ 
E_{F}\cdot n = E_{F} \int_{0}^{\infty} D(E)f(E,T) \, dE 
\tag{6} $$

Subtracting $(6)$ from $(4)$ $c_{v}$ is obtained as: 

$$ 
c_{v}= \int_{0}^{\infty} (E-E_{F}) D(E)\frac{ \partial{f(E,T)}}{\partial{T}} \, dE 
\tag{7} 
$$

Focusing around $E_{F}$, because the electron can only gain energy if they can move into free states in their energetic neighborhood, we can see that the $D(E)$ is nearly constant in the range and can be approximated by $D(E_{F})$ 

$$ 
c_{v} \simeq D(E_{F})\int_{0}^{\infty} (E-E_{F})\frac{ \partial{f(E,T)}}{\partial{T}} \, dE 
\tag{8} 
$$

and the derivative of the Fermi function is:

$$ 
\frac{\partial{f}}{\partial{T}}=\frac {E-E_{F}}{k_{B}T^{2}}\frac{exp(\frac{E-E_{F}}{k_{B}T})}{[exp(\frac{E-E_{F}}{k_{B}T})+1]^{2}} \tag{9}
$$

substituting $(9)$ in $(8)$

$$
c_{v}=D(E_{F}) \int_{0}^{\infty} \frac{(E-E_{F})^{2}}{k_{B}T^{2}}\frac{exp(\frac{E-E_{F}}{k_{B}T})}{[exp(\frac{E-E_{F}}{k_{B}T})+1]^{2}}  \, dE \tag{10}
$$ with $x=\frac{E-E_{F}}{k_{B}T}$, $dx=\frac{dE}{k_{B}T}$ 



$$
c_{v}=Tk_{B}^{2}D(E_{F})\int_{-\frac{E_{F}}{k_{B}T}}^{\infty}  \frac{x^{2}e^{x}}{(e^{x}+1)^{2}}\, dx \tag{11}
$$
and since $E_{F}\gg k_{B}T \implies -\frac{E_{F}}{k_{B}T}\to-\infty$

$$
c_{v}=Tk_{B}^{2}D(E_{F})\int_{-\infty}^{\infty}  \frac{x^{2}e^{x}}{(e^{x}+1)^{2}}\, dx \tag{12}
$$

The integral is a standard one, whose result can be found in tables:

$$
\int_{-\infty}^{\infty}  \frac{x^{2}e^{x}}{(e^{x}+1)^{2}}\, dx=\frac{\pi^{2}}{3}  \tag{13}
$$

and therefore

$$
c_{v}\simeq Tk_{B}^{2}D(E_{F})\frac{\pi^{2}}{3} \tag{14}

$$

the specific heat is proportional to the temperature.

If we want to express $c_{v}$ as a function of $n$ we need to calculate the integral 

$$ 
n=\int_{0}^{E_{F}}D(E) \, dE \tag{15}
$$

being $D(E)=\frac{m}{(\pi \hbar)^{2}} (\frac{2mE}{\hbar^{2}})^{1/2}$ we can rewrite it as:

$$ 
\displaylines{
D(E)=D(E) \frac{E_{F}^{1/2}}{E_{F}^{1/2}} =\\ =\frac{m}{(\pi \hbar)^{2}} \left( \frac{2m}{\hbar^{2}} \right)^{1/2} E_{F}^{1/2} \frac{E^{1/2}}{E_{F}^{1/2}} = D(E_{F})\left( 
\frac{E}{E_{F}} \right)^{1/2} \tag{16}
}
$$ 

and use it in the calculation of $(15)$ we can obtain the DOS at $E_{F}$:

$$ 
D(E_{F})=\frac{3}{2} \frac{n}{E_{F}} \tag{17}
$$

and the specific heat is

$$ 
c_{v}=\frac{\pi^{2}}{2}nk_{B} \frac{T}{T_{F}}
$$

as $E_{F}=k_{B}T_{F}$.

The specific heat is again proportional to the temperature, if the temperature is lower than $T_{F}$, the contribution to the whole specific heat (with phonon contribution) is low.

The expected $c_{v}$ relation **at low temperature** is:

$$ 
c_{v}=\gamma T+\beta T^3

$$
with $\gamma,\beta = const$. 

#todo add graph (Cv/T on T^2) 
