
## Free and independent electron model

- **Independent**: neglect interaction between electrons (Coulomb repulsion)
- **Free**: assume that the potential $V = 0$

Let's consider a crystal of macroscopic dimensions ($L_{x}, L_{y}, L_{z}$) and define a reference system as shown below.


![[ref cube.svg|300]]

We can then write the Shroedinger equation (SE)

$$-\frac{\hbar}{2m} \nabla^{2} \Psi(\bar{r}) = E \Psi (\bar{r})$$

for which we can write the general solution: 

$$
\Psi(\bar{r}) = \frac{1}{\sqrt{ V }} e^{ i \bar{k} \bar{r} } \quad (V = L_{x} \cdot L_{y} \cdot L_{z}) \qquad (1)
$$


and the eigenvalues:

$$
E = \frac{\hbar^{2} k^{2}}{2m}
$$

Since we want to study the properties of the material as if it was infinite, we have to use a mathematical "trick" to write this condition. What we do is saying that instead of going "outside" the crystal, we enter in an identical one (i.e. we imagine being in a periodic matrix of crystals one next to the other).
This is called **periodic boundary condition** (PBC) or **Born Von Karman condition** and can be written as follows:  ^dedc30

$$
\displaylines{
\Psi(x, y, z) &= \Psi(x + L_{x}, y, z) \\
& = \Psi(x, y + L_{y}, z)\\
&= \Psi (x, y, z + L_{z})\\
} \qquad (PBC)
$$

Applying $PBC$ to $(1)$ we get 

$$
\displaylines{
\frac{1}{\sqrt{ V}} e^{ i(k_{x} x + k_{y} y + k_{z} z) } = \underbrace{ \frac{1}{\sqrt{ V }} e^{ i(k_{x} x + k_{x} L_{x}+ k_{y} y + k_{z} z) } }_{ \Psi(x + L_{x}, y, z) } \\
\Downarrow \\
e^{ i k_{x} L_{x} } = 1 \\
\Downarrow \\
{\color{red} k_{x} L_{x} = 2 \pi n_{x}} 
}
$$
where $n_{x}$ is an integer. From this we can obtain the following relations:

$$
\begin{cases}
k_{x} = \frac{2\pi}{L_{x}} n_{x} \\
k_{y} = \frac{2\pi}{L_{y}} n_{y} \\
k_{z} = \frac{2\pi}{L_{z}} n_{z} \\
\end{cases}
$$

Since $L_{x}, L_{y}, L_{z}$ are macroscopic dimensions $k$s can be approximated as being continuous. ^4d5fdd

We also know the following 

$$
\begin{cases}

E = \frac{\hbar^{2} k^{2}}{2m} \qquad (2)\\
p = \hbar \cdot k \qquad
\end{cases}
$$

### Density of states (DOS)

The density of states $D(E)$ is defined as follows: ^9c22fc

$$
D(E) = \frac{1}{V} \frac{dN(E)}{dE} \quad \left[ \frac{1}{cm^{3} \cdot eV} \right]
$$

^98edb3

Where $N(E)$ is the number of states (i.e. the eigenvalues of the system).

We can find $N(E)$ geometrically reasoning on the following picture.

![[numberOfStates.png|400]]

Since $k$ and $E$ are related by $(2)$ we can find first find $N(k)$ and then obtain $N(E)$. 

$$
k = \sqrt{ \frac{2mE}{\hbar^{2}} } \qquad (3)
$$


$N(E)$ can be calculated as the number of orange points inside a sphere of radius $k$ divided by the volume occupied by one energy state (the highlighted cube):

$$
\begin{align}
N(E) &= \overset{ \substack{spins \\ \downarrow} }{ 2 } \frac{4/3 \pi k^{3}}{(2 \pi)^{3}/V} \\ 
&\overset{ (3) }{ = } \frac{8/3 \pi \left( \frac{2mE}{\hbar^{2}} \right)^{3/2}}{8 \pi^{3}/V} \\ 
& = \frac{V}{3 \pi^{2}} \left( \frac{2m}{\hbar^{2}} \right) ^{3/2} E ^{3/2} 
\end{align}
$$

From which we can obtain 

$$
\displaylines{
D(E) = \frac{1}{\cancel{ V }} \frac{\cancel{ V }}{\cancel{3} \pi^{2}} \left( \frac{2m}{\hbar^{2}} \right)^{3/2} \frac{\cancel{3}}{2} \sqrt{ E } \\\\

{\color{red} D(E) = \frac{1}{2 \pi^{2}} \left( \frac{2m}{\hbar^{2}} \right)^{3/2} \sqrt{ E }}  \quad \propto \sqrt{ E }
}
$$

![[De.png|400]]

### Fermi-Dirac distribution

Fermi-Dirac distribution gives the probability of a given quantum state of energy of being occupied at a given temperature.

$$
\displaylines{
f(E, T) = \frac{1}{e^{ \frac{E - E_{F}}{KT} } + 1} \\\\
\lim_{ T \to 0 } f(E, T) = \begin{cases}
1 \quad E < E_{F} \\
0 \quad E > E_{F}
\end{cases} 
}
$$

![[fermidirac.excalidraw.png|400]]
We can see that this model cannot correctly represent materials such as insulators or semi conductors.

## Independent electrons model

This model improves the previous one by dropping the "free electrons" assumption. This implies that in this case the potential is periodic: 

$$
\displaylines{
V(\bar{r}) = V(\bar{r} + \bar{R}_{n}) \\
\bar{R}_{n} = n_{1} \bar{a}_{1} + n_{2} \bar{a}_{2} + n_{3}\bar{a}_{3} \quad n_{1}, n_{2}, n_{3} = 0, \pm 1, \pm 2~\dots
}
$$

![[ref cube 2.svg|300]]

$$
\displaylines{
L_{x} = a_{1} \cdot N_{1} \\
L_{y} = a_{2} \cdot N_{2} \\
L_{z} = a_{3} \cdot N_{3} \\
}
$$

For a periodic potential, the SE is 

$$
- \frac{\hbar^{2}}{2m} \nabla^{2} \Psi(\bar{r}) + V(\bar{r}) \Psi(\bar{r}) = E \Psi(\bar{r})
$$
### Bloch theorem

$$
\displaylines{
\Psi_{\bar{k}}(\bar{r}) = e^{ i \bar{k} \bar{r} } \cdot \mu_{\bar{k}}(\bar{r}) \\
\mu_{\bar{k}}(\bar{r}) = \mu_{\bar{k}}(\bar{r} + \bar{R}_{n})
}
$$

which can be also written as 

$$
\displaylines{
\begin{align}
\Psi_{\bar{k}}(\bar{r}) &= e^{ i \bar{k} \bar{r} } \cdot \mu_{\bar{k}}(\bar{r}) \\
&=  e^{ i \bar{k} \bar{r} } e^{ i \bar{k} \bar{R}_{n} } \cdot \mu_{\bar{k}}(\bar{r} + \bar{R}_{n}) \\
&= \underbrace{ e^{ i \bar{k} \bar{r} } \mu_{\bar{k}}(\bar{r}) }_{ \Psi_{\bar{k}}(\bar{r}) } e^{ i \bar{k} \bar{R}_{n} }
\end{align} \\
\Downarrow \\
{\color{red} \Psi_{\bar{k}}(\bar{r} + \bar{R}_{n}) = \Psi_{\bar{k}}(\bar{r}) \cdot e^{ i \bar{k} \bar{R}_{n} }} 
}

$$
Similarly to what we did before we need to find $\bar{k}$ that satisfy the following conditions (we will only consider the $x$ direction but the same can be done for $y$ and $z$): 

$$

\begin{align}
1)\quad& \Psi_{\bar{k}}(\bar{r} + \bar{R}_{n}) = \Psi_{\bar{k}}(\bar{r}) e^{ i \bar{k} \bar{R}_{n} } \\
2) \quad& PBC  \\
3) \quad& \Psi_{\bar{k}}(\bar{r} + N_{1} \bar{a}_{1}) = \Psi_{\bar{k}}(\bar{r}) \leftarrow \text{ periodicity along } \bar{x}
\end{align}

$$

Since $N_{1} \bar{a}_{1}$ is one of the $\bar{R}_{n}$ we can rewrite $1)$ as 

$$
1\text{ bis})\quad \Psi_{\bar{k}}(\bar{r} + N_{1} \bar{a}_{1}) = \Psi_{\bar{k}}(\bar{r}) e^{ i \bar{k} (N_{1} \bar{a}_{1}) }
$$
In order to satisfy $1 \text{ bis})$ and $2)$ we need that the exponential is $= 1$ which means 

$$
{\color{red} N_{1} ~ \bar{k} ~ \bar{a}_{1} = 2 \pi n_{x}} \quad (*)
$$
Since $\bar{k}$ is $\left[\frac{1}{\text{length}}\right]$ it belongs to the reciprocal space and can thus be written as 

$$
\bar{k} = x_{1} \bar{g}_{1} + x_{2} \bar{g}_{2} + x_{3} \bar{g}_{3}
$$
Remembering the [[#Reciprocal lattice|reciprocal lattice definition]] 

$$
\bar{a}_{i}\cdot \bar{g}_{j} = 2 \pi \delta_{ij}
$$

so, by rewriting $(*)$ as 

$$
N_{1} (x_{1} \bar{g}_{1} + x_{2} \bar{g}_{2} + x_{3} \bar{g}_{3}) \cdot \bar{a}_{1} = 2 \pi n_{x}
$$

we can see that the only term that survives (because of the $\delta_{ij}$) is 

$$
\displaylines{
N_{1} x_{1} \cancel{ 2 \pi } = \cancel{2 \pi} n_{x} \\
\Downarrow \\
x_{1} = \frac{n_{x}}{N_{1}}
}
$$

Similarly for all the directions: 

$$
\begin{cases}
x_{1} = \frac{n_{x}}{N_{1}} \\
x_{2} = \frac{n_{y}}{N_{2}} \\
x_{3} = \frac{n_{y}}{N_{3}}
\end{cases}
$$

So, finally, $\bar{k}$ can be rewritten as 

$$
\bar{k} = \frac{n_{x}}{N_{1}} \bar{g}_{1} + \frac{n_{y}}{N_{2}} \bar{g}_{2} + \frac{n_{z}}{N_{3}} \bar{g}_{3}
$$

this resembles a $\bar{G}$ vector but we have to remember that $n_{\text{dir}}/N_{i}$ is not necessarily an integer.

#todo %% Aggiungere disegno di pagina 8 di samsung notes %%

From the drawing we can see that along the $x$ direction there are $N_{1}$ allowed $\bar{k}$ vector. Since the Brillouin zone has the same area as the green one (which is a primitive cell of the reciprocal lattice), both of them can fit $N_{tot} = N_{1} N_{2} N_{3}$ $\bar{k}$ vectors.

### Property of the Bloch state

$$
\Psi_{\bar{k} + \bar{G}} = \Psi_{\bar{k}}(\bar{r}) \qquad (4)
$$

Given the property above, we can say that, given $\hat{H} \Psi_{\bar{k}}(F) = E_{\bar{k}}\Psi_{\bar{k}}(\bar{r})$:

$$
\displaylines{
\hat{H} ~ \Psi_{\bar{k}+\bar{G}}(\bar{r}) = E_{\bar{k}+\bar{G}} ~ \Psi_{\bar{k} + \bar{G}}(\bar{r}) \\
\hat{H} ~ \Psi_{\bar{k}}(\bar{r}) \overset{ (4) }{ = } E_{\bar{k} + \bar{G}} ~ \Psi_{\bar{k}}(\bar{r}) \\
\Downarrow \\
{\color{red} E_{\bar{k} + \bar{G}} = E_{\bar{k}}} 
}
$$

So the eigenvalues are periodic.
%% siamo sicuri siano giuste le formule sopra??? %%

%% disegno pagina 8 in basso specificando il gap%%

In the drawing above the energy bands are represented only between $- \pi / a_{1}$ and  $\pi / a_{1}$ because $E_{\bar{k}}$ is periodic.

It is important ot notice that, differently from the [[#Independent and free electron model|free electron model]] here the energy does not go continuously from $-\infty$ to $+\infty$ and thus the behavior of semiconductors and insulators can be explained.

#### Example

Let's consider the case of a solid made out of cells with only 1 atom with 1 electron.

We want to see:
1) if the material behaves as a metal, a semiconductor or an insulator.
2) its properties depend on the size.

Notice that the red lines in the drawing are not continuous in reality for the reasons stated [[#^4d5fdd|previously]]; this show that there are only $N_{tot}$ allowed $\bar{k}$ vectors between  $- \pi / a_{1}$ and  $\pi / a_{1}$ and thus $N_{tot}$ allowed energy states (the orange dots). 

Considering that we have $N_{tot}$ electrons (1 electron in 1 atom in 1 cell) and that the Pauli exclusion principles allows 2 electrons in each state, only half of the first band is occupied.

If we were to double the size of the sample nothing would change since there would be $2N_{tot}$ electrons and $2N_{tot}$ allowed $\bar{k}$ vectors.

## Germanium band structure and DOS

Recalling the definition of density of states ![[#^98edb3]]
we can draw a very simplified plot of $D(E)$ and $E$ (on the left) and the probability of occupation ([[Group A Lectures#^7202aa|see group A notes]]):

![[DOS and prob.excalidraw.png|600]]

At $T = 0K$ the probability is $0$ above the fermi energy, and $1$ below, thus the valence band will be fully occupied and the conduction band will be empty.

For temperatures above $0K$, on the other hand, some electrons (in yellow) will be excited to the conduction band. These electrons do not behave as free particles and their mass is not the same as the one of the free electron. 
We can define the **effective mass** as:

$$
m^{*}_{ij} = \frac{\hbar^{2}}{\left[ \frac{\partial^{2} E}{\partial k_{i} \partial k_{j}}\right]}
$$

It is important to notice that the effective mass depends on the direction, since the potential changes depending on the structure of the lattice. The core electrons, the ones near the nucleus, have $m^{*} \to \infty$.

If the crystal is isotropic the effective mass does not depend on the direction.

## Effective mass and energy

The plots below show a representation of two energy bands (in blue) and the relative effective mass associated to them (in red).

![[effective mass.excalidraw.png|600]]

The yellow regions highlight the fact that where the band have a parabolic shape, the effective mass is constant (since it depends on the second derivative of the energy).

Where the energy has an inflection point the effective mass will tend to $\pm \infty$. 

Finally, we can notice that in the left plots the effective mass has lower absolute values since the second derivative of the energy is greater compared to the right plot.

Since electrons can have a negative effective mass, it is possible to consider them as fictitious particles with a positive mass and opposite charge called **holes**.

%% ## Parabolic approximation

Near the maximum and minimum regions, the bands can be approximated with a parabola. %%

%% inserire disegno e altre info %%

## Substitutional impurities in semiconductors

Defects usually generate a new state in the energy gap, this is the case with doping (which is a substitutional impurity).

## Example: $P$ in $Si$

Substituting a $Si$ atom with a $P$ atom (which has one extra electron) will form a **hydrogenic species** (similarly to hydrogen there is an electron and a positive charge in the middle with charge $+q\,$).

$$
\displaylines{
\hat{H} = -\frac{\hbar^{2}}{2m} \nabla^{2} - \overbrace{ \frac{e^{2}}{4 \pi ~ \varepsilon_{0} ~ \varepsilon_{Si}} }^{\substack{\text{attraction between} \\ \text{e}^{-} \text{ and } Si}}
\\
\hat{H} \Psi(\bar{r}) = E \Psi(\bar{r})
\\
\\
E_{n} = \frac{- m ~ e^{4}}{2(4\pi \varepsilon_{0} \varepsilon_{Si} \hbar^{2})} \frac{1}{n^{2}}
\\
\\
n = 1,2,3,\dots \text{(principal quantum number)}
}
$$

If we calculate the energy $\Delta E$ needed to move an electron from the energy state with $N = 1$ to the conduction band (where it can move freely) we would get $\Delta E(n = 1 \to n = \infty) = 45 ~m\text{eV}$.
