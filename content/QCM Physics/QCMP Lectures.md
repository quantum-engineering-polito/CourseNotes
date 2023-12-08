---
dg-publish: true
tags:
  - lattice
  - Wigner-Seitz
  - Bravais
  - coordination_number
  - reciprocal_lattice
  - Brillouin
  - Schottky
  - Frenkel
  - PBC
---



# Introduction to the crystal structure

![[Crystallography#Types of solids]]
## Bravais lattice

A **Bravais lattice** can be defined in two ways. The informal definition states that a lattice is a Bravais lattice if any point is equivalent to any other in terms of symmetry and relations to the other point (i.e. if I am on a point and then move to another point I cannot tell the difference).

The mathematical definition instead is as follows

$$
\displaylines{
\bar{R_{n}} = n_{1}\bar{a_{1}} + n_{2}\bar{a_{2}} + n_{3}\bar{a_{3}} \\
\bar{a_{1}}, \bar{a_{2}}, \bar{a_{3}} \quad \text{are base vectors}\\
n_{1}, n_{2}, n_{3}= 0, \pm 1, \pm 2,\, \dots
} 
$$

### Primitive cell unit

A primitive cell unit is defined as any volume of space which, when translated through all the vectors of the Bravais lattice, fill space without overlap and without leaving voids.

![[primitiveUnitCellMarks.png|300]]

Primitive cells must contain only one lattice point; it the point is on the edge of the cell only a fraction of it is considered (if a point is shared between 4 cells, each cell will have 1/4 of it).

### Wigner-Seitz cell

Wigner-Seitz cell is a special choice of primitive unit cell: region of points closer to a given lattice point than to any other. 

How to draw it in 2D: ^69cf07
1) Find the point for which you want to draw the cell.
2) Draw lines that connect it to all its nearest neighbours.
3) For each of these lines draw a perpendicular line(*) that passes through its mid point.
4) The area delimited by the lines (*) is the Wigner-Seitz cell.
![[wignerSeitzCell2.png|300]]

### Bravais lattice

![[Crystallography#Bravais lattice]]
It should be noted that BCC and FCC are not primitive because they contain more than one point (the primitive cell wouldn't show the cubic symmetry).

## Crystal structure

Bravais lattice is an abstract concept which is useful to characterize a crystal. The crystal itself is made out of a Bravais lattice and a **basis**. The basis can be one atom or a molecule. 

![[fcccrystalOneAtom.png|300]]

![[fullereneCrystal.png|300]]
In the images above we can see that the unit of repetition (the basis) is an atom in the first case and a molecule in the second, but the lattice is the same. 
Changing the basis changes the **coordination number** which is the number of atoms connected to a specific atom.

### Silicon crystal structure

![[silicon structure.png|300]]

In the image above it is possible to see that the unit of repetition in this case is made of the two red atoms and that the coordination number is 4. The atoms positions in the primitive cell are expressed in **fractional coordinates** which means that they are expressed as a fraction of the [[FTP Lectures#^962ccb|lattice parameter]] *a*.

## Reciprocal lattice

Let's start with a Bravais lattice

$$
\displaylines{
\bar{R_{n}} = n_{1}\bar{a_{1}} + n_{2}\bar{a_{2}} + n_{3}\bar{a_{3}} \\
n_{1}, n_{2}, n_{3}= 0, \pm 1, \pm 2,\, \dots
} 
$$

We define the **reciprocal lattice** $\bar{G}$ such as 

$$
\bar{G} \bar{R_{n}} = 2 m \pi \qquad m = 0, \pm 1, \pm 2 \, \dots
$$

note that the number of $\bar{G}$ vectors is infinite and that since $\bar{R_{n}}$ is in meters $[m]$ $\bar{G}$ is $[m]^{-1}$ which is a reciprocal space.

We need to find a base for $\bar{G}$ in the reciprocal space that satisfies the following condition: 

$$
\bar{a_{i}} \cdot \bar{g_{j}} = 2 \pi \delta_{ij} \quad \delta_{ij} = \begin{cases}
1 \quad i = j \\ \\
0 \quad i \neq j
\end{cases}
$$

where $\bar{g_{j}}$ are the base vectors in the reciprocal space and $\bar{a_{i}}$ are the base vectors in the direct space.

Since we can find $g_{1}, g_{2}, g_{3}$ given $a_{1}, a_{2}, a_{3}$ we can write 

$$
\bar{G} = h\bar{g_{1}} + k \bar{g_{2}} + l \bar{g_{3}} \quad h,k,l = 0, \pm 1, \pm 2\, \dots
$$

which is again a Bravais lattice.

### Example in 2D

![[reciprocal lattice ex 2D.svg|400]]


$$
\bar{R_{n}} = n_{1} \bar{a_{1}} + n_{2} \bar{a_{2}}
$$

We can calculate the base vectors of the reciprocal space using the constraints given above.

$$
\displaylines{
\bar{g_{1}}\bar{a_{1}} = 2 \pi \\
\bar{g_{1}} \bar{a_{2}} = 0 \implies \bar{g_{1}} \perp \bar{a_{2}} \\
\bar{g_{2}} \bar{a_{1}} = 0 \implies \bar{g_{2}} \perp \bar{a_{1}} \\
\bar{g_{2}} \bar{a_{2}} = 2 \pi \\
\Downarrow \\
\begin{cases}
g_{1} = \frac{2 \pi}{a_{1} \cdot \cos(90^\circ)} = \frac{2 \pi} {a_{1}} \\
g_{2} = \frac{2 \pi}{a_{2} \cdot \cos(90^\circ)} = \frac{2 \pi} {a_{2}}
\end{cases}
}
$$

We can than draw the Wigner-Seitz cells for the two lattices. The WS cell of the reciprocal space is called **Brillouin zone**.

### Example: electrostatic potential

The electrostatic potential in a crystal is periodic: 

$$
V(\bar{r}) = V(\bar{r} + \bar{R_{n}}) \qquad (1)
$$

We will use the generic function $f()$ instead of $V()$.

$$
\displaylines{
f(\bar{r}) \overset{ Fourier }{ = } \sum_{\bar{k}} c_{\bar{k}} e^{ i \bar{k} \bar{r} } \qquad (2) \\\\

\begin{align} \\
f(\bar{r}) &\overset{ (1) }{=} f(\bar{r} + \bar{R_{n}}) \\
& \overset{ (2) }{ = } \sum_{\bar{k}} c_{\bar{k}} e^{ i \bar{k}(\bar{r} + \bar{R_{n}}) } \\
& =  \sum_{\bar{k}} c_{\bar{k}} e^{ i \bar{k} \bar{r} } e^{ i \bar{k} \bar{R_{n}} } \\
& \overset{ (1) }{ = } \sum_{\bar{k}} c_{\bar{k}} e^{ i \bar{k} \bar{r} } && \implies e^{ i \bar{k} \bar{r} } = 1  \\
& && \implies  \bar{k} \bar{R_{n}} = 2 \pi m  \\
& &&\implies \bar{k} \equiv \bar{G}
\end{align}
}
$$

# Defects in crystalline solids

We are interested in studying defects in crystals because some of them (point defects in particular) are used in quantum engineering to achieve desired results. Doping for example is a kind of point defect.

## Non ionic crystals defects

In the following table it is possible to see some kinds of point defects that can affect non ionic crystals (crystals made of one type of atom only).

![[Crystallography#Point defects]]

## Ionic crystals defects

In ionic crystal (made of two kinds of atoms, one positive ion and one negative), there are two common defects.

| Schottky         | Frenkel |
| ---------------- | ------- |
| ![[shottky.png]] |   ![[frenkel.png]]      |

The Schottky defects correspond to a missing cation/anion pair while Frenkel defects correspond to a vacancy and a nearby interstitial of the same ion.

## Defects formation energy

We would expect no defects at thermodynamic equilibrium but this is not the case because forming defects increases the entropy which stabilizes the system (?).

## Pairs of point defects

In ionic crystals the charge is carried not by electrons, but by the ions themselves; this would be extremely difficult to achieve in a perfect crystal but can happen easily in the presence of vacancies which can allow the motion of units of positive charge.

![[vacancy motion.png|600]]

## Color centers

Alkali-alide crystals are transparent throughout the visible region of the spectrum. But may become coloured in presence of defects.

### F-centers




# Independent and free electron model

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

## Density of states (DOS)

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

# Independent electrons model

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
## Bloch theorem

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

## Property of the Bloch state

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

### Example

Let's consider the case of a solid made out of cells with only 1 atom with 1 electron.

We want to see:
1) if the material behaves as a metal, a semiconductor or an insulator.
2) its properties depend on the size.

Notice that the red lines in the drawing are not continuous in reality for the reasons stated [[#^4d5fdd|previously]]; this show that there are only $N_{tot}$ allowed $\bar{k}$ vectors between  $- \pi / a_{1}$ and  $\pi / a_{1}$ and thus $N_{tot}$ allowed energy states (the orange dots). 

Considering that we have $N_{tot}$ electrons (1 electron in 1 atom in 1 cell) and that the Pauli exclusion principles allows 2 electrons in each state, only half of the first band is occupied.

If we were to double the size of the sample nothing would change since there would be $2N_{tot}$ electrons and $2N_{tot}$ allowed $\bar{k}$ vectors.

# Germanium band structure and DOS

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

# Effective mass and energy

The plots below show a representation of two energy bands (in blue) and the relative effective mass associated to them (in red).

![[effective mass.excalidraw.png|600]]

The yellow regions highlight the fact that where the band have a parabolic shape, the effective mass is constant (since it depends on the second derivative of the energy).

Where the energy has an inflection point the effective mass will tend to $\pm \infty$. 

Finally, we can notice that in the left plots the effective mass has lower absolute values since the second derivative of the energy is greater compared to the right plot.

Since electrons can have a negative effective mass, it is possible to consider them as fictitious particles with a positive mass and opposite charge called **holes**.

%% ## Parabolic approximation

Near the maximum and minimum regions, the bands can be approximated with a parabola. %%

%% inserire disegno e altre info %%

# Substitutional impurities in semiconductors

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

# Fermi golden rule

The [[#Density of states (DOS)]] can be written in another equivalent form 

$$
D(E) = \sum_{n} \delta(E - E_{n})
$$

which, differently from the one seen previously, is not normalized to volume. From the two formulas we can calculate 

$$
\begin{align}
&N(E) = V \int_{E_{1}}^{E_{2}} D(E) \, dE && \tag{1}
\\
&N(E) = \int_{E_{1}}^{E_{2}} \sum_{n} \delta(E - E_{n}) \, dE && \tag{2}
\end{align}
$$

## Perturbation theory

#todo
%% ???? %%

$$
\hat{H}_{0} \Phi_{i} (\bar{r}, t) = E_{i} \Phi_{i} (\bar{r}, t)
$$

If the Hamiltonian is time independent we can write 

$$
\Phi_{i}(\bar{r}, t) = \phi_{i}(\bar{r}) e^{ -i( E_{i}/\hbar) t } \quad \text{(stationary state)}
$$

When the system is perturbed with a perturbation $\hat{V}$, the Hamiltonian changes 

$$
\hat{H} = \hat{H}_{0} + \hat{V}(t)
$$

We have to find $\Psi (\bar{r}, t)$ that describes the system after the perturbation: 

$$
\hat{H} \Psi(\bar{r}, t) = i \hbar \frac{ \partial \Psi(\bar{r}, t) }{ \partial t } \quad \text{(time dependant S.E.)}
$$

Since $\Phi_{i}$ is a base of the Hilbert space (???) we can write 

$$
\Psi(\bar{r}, t) = \sum_{j} {\color{red}  c_{j}(t)}  \Phi_{j} (\bar{r}, t)
$$

where the coefficient $c_{j}$ must introduce the time dependance in the wave function.

> [!warning] Many steps are not reported in the following.

By substituting the wave function into the time dependant S.E. we get 

$$
\frac{ \partial c_{f}(t) }{ \partial t } = \frac{1}{i \hbar} \sum_{j} c_{j}(t) \cdot V_{fj}(t) ~ e^{ i (E_f - E_{j}) t /\hbar } \tag{3}
$$

Where 

$$
V_{fj}(t) = \braket{ \phi_{f}(\bar{r}) | \hat{V}(t) | \phi_{j}(\bar{r}) } 
$$
can be calculated since both the perturbation $\hat{V}$ and $\phi$ are known.

### First order perturbation theory

To solve equation $\eqref{3}$ we need to make some assumptions: we suppose that the perturbation is so small that the system hasn't evolved too much. This allows to approximate all $c_{j} = 0$ except for the first one: 

$$
\begin{align}
& c_{i}(t \simeq 0) = 1 && \text{(} i = \text{initial)} \\
&c_{j}(t \simeq 0) = 0 && j \neq i
\end{align}
$$

With this approximation we can rewrite $\eqref{3}$ as 

$$
\displaylines{
\frac{ \partial c_{j}(t) }{ \partial t } = \frac{1}{i \hbar} 1 \cdot V_{fi}(t) e^{ i(\overbrace{ E_{f} - E_{i}}^{ E_{fi} }) t /\hbar } \\
\Downarrow\\
c_{f}(t) = \frac{1}{i\hbar} \int_{0}^{t} V_{fi} (t') e^{ i E_{fi} ~ t /\hbar }\, dt'
}
$$

The probability of finding the system in a given (final) state is:

$$
P_{f} = |c_{f}(t)|^{2} = \frac{1}{\hbar^{2}} \cdot \left|\int_{0}^{t} V_{fi}(t') e^{ i E_{fi} t' /\hbar } \, dx \right|^{2} 
$$

While the **transition rate** is:

$$
W_{fi} = \frac{ \partial P_{f} }{ \partial t } 
$$

This means that if $P_{f}$ is close to $1$ the perturbation had a strong effect on the system.

## Dipole in an electric field

#todo dipole in electric field ?? why is $c_{f}(t)$ in that way?

---

We finally get 

$$
\begin{align}
\left| c_{f}(t) \right| ^{2} &= \frac{t^{2}}{\hbar^{2}} |M_{fi}|^{2} sinc^{2}\left[ (E_{fi} - \hbar \omega) \frac{t}{2\hbar} \right] +  \\
&+ \frac{t^{2}}{\hbar^{2}} |M_{if}|^{2} sinc^{2}\left[ (E_{fi} + \hbar \omega) \frac{t}{2\hbar} \right] + \\
&+ \cancelto{\simeq 0}{ \frac{2t^{2}}{\hbar^{2}} \cos\left( \frac{\omega t}{\hbar} \right) sinc\left[ (E_{fi} - \hbar\omega) \frac{t}{2\hbar} \right] \cdot sinc\left[ (E_{fi} + \hbar\omega) \frac{t}{2\hbar} \right] \cdot M_{fi} \cdot M_{if}^{*} }
\end{align}
$$

<iframe src="https://www.desmos.com/calculator/es2d8sr5iz?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

By plotting the first term we can see that it has a spike where $\hbar\omega = E_{fi}$ (remember that $E_{fi} = E_{f} - E_{i}$). This means that the perturbation needs to have the "right" frequency to influence the system in a meaningful way. We can also see that for short times the influence of the perturbation is smaller compared to longer times.
Plotting the second term alone shows similar result but when $\hbar\omega = -E_{fi}$.
The first case corresponds to the **absorption** of a photon (the system increases its energy), the second one, on the other hand, to the **emission** of a photon.

#todo check the problem with the delta

By calculating the transition rate we get the **Fermi golden rule**: 

$$
\begin{align}
&W_{fi} = \frac{2\pi}{\hbar} |M_{fi}|^{2} \delta(E_{f} - E_{i} {\color{red} -}  \hbar \omega) \qquad \text{(first term)} \\
&W_{if} = \frac{2\pi}{\hbar} |M_{fi}|^{2} \delta(E_{f} - E_{i} {\color{red} +}  \hbar \omega) \qquad \text{(second term)}
\end{align}
$$

#todo case for a complex system

## Electrons in a crystal

#todo %% improve drawing %%

![[electron in crystal temp.png|300]]

$$M_{fi} = \braket{ \phi_{f} | e \bar{r} \bar{\varepsilon}_0  e^{ \pm i \bar{k} \bar{r} }|\phi_{i}}$$

Since $\phi_{i}, \phi_{f}$ are typically **Bloch states**:

$$
\begin{align}
&\phi_{i}(\bar{r}) = \frac{1}{\sqrt{ V }} e^{ i \bar{k}_{i} \bar{r} } \cdot u_{k_{i}}(\bar{r}) \\
& \phi_{f}(\bar{r}) = \frac{1}{\sqrt{ V }} e^{  i \bar{k}_{f} \bar{r} } \cdot u_{k_{f}}(\bar{r})
\end{align} 
$$

#todo what are we doing??


# n-N heterostructure

**n**: almost intrinsic
**N**: heavily doped

![[remote doping.png|400]]

The green line in the drawing is the tangent to the conduction band which can be used as an approximation for a **triangular potential well**.

The well can be approximated as a capacitor which represent the interface between the materials.
Since the electric field changes only in the $z$ direction, we can write 

$$
\bar{\varepsilon} \equiv \varepsilon_{z} = \varepsilon = - \frac{d\phi}{dz}
$$

We can also say that since $\phi = 0$ when $z = 0$, then $\phi = -\varepsilon \cdot z$. The potential energy then is $V(z) = e \varepsilon_{z}$.
This approximation, the fact that the potential is linear, works well near the interface (see the green line in the drawing above).

#todo add drawing

We can assume that $L_{x}$ and $L_{y}$ are macroscopic quantities and that $A = L_{x} \cdot L_{y}$.

Since the electrons are free and independent in the $x,y$ plane:

$$
V(x,y) = 0
$$
So:

$$
V(z) = \begin{cases}
e \cdot \varepsilon_{z} &&z \geq 0 \\ \\
\infty && z < 0
\end{cases}
$$

The SE is:

$$
-\frac{\hbar^{2}}{2m} \nabla^{2} \Psi(x,y,z) + V(z) \Psi(x,y,z) = E ~ \Psi(x,y,z)
$$

we want to find solutions that can be factorized so that one depends only on $x$ and $y$ and the other one that depends only on $z$:

$$
\Psi(x,y,z) = \phi(x,y) \cdot \theta(z)
$$

With a few steps (not reported) we get:
#todo add those steps because $E = E_{xy} + E_{z}$ is needed later

$$
\begin{align} \\
 & -\frac{\hbar^{2}}{2m}\left( \frac{ \partial^{2} }{ \partial x^{2} } + \frac{ \partial^{2} }{ \partial x^{2} }  \right) \phi(x,y) = E \phi(x,y) \tag{4} \\ \\
 & -\frac{\hbar^{2}}{2m} \frac{d^{2}}{dz^{2}} + V(z) \theta(z) = E \theta(z) \tag{5}
\end{align}
$$

Equation (4) describes the free electrons is the $xy$ plane (where the potential is constant) and thus we get plane waves: 

$$
\begin{align}
 & \phi(x,y) = \frac{1}{\sqrt{ A }} e^{ i \bar{k} \bar{r} } = \frac{1}{\sqrt{ A }} e^{ i(k_{x} \cdot x + k_{y} \cdot y) }  \qquad A = L_{x} \cdot L_{y} \\
 \\
 & E_{xy} = \frac{\hbar^{2} k^{2}}{2m}
\end{align}
$$

Notice that $m$ should be the **effective mass** $m^{*}$.

Applying the [[#^dedc30|PBC]] to the $x$ and $y$ directions we get 

$$
\begin{align}
 & \phi(x + L_{x}, y, z) = \phi(x,y,z) \implies k_{x} = \frac{2\pi}{L_{x}} \cdot n_1\\
 & \phi(x , y + L_{y}, z) = \phi(x,y,z) \implies k_{y} = \frac{2\pi}{L_{y}} \cdot n_2
\end{align}
$$

Equation (5), on the other hand, describes the particles in a triangular potential well. By applying multiple changes of variable (not reported here) we get:

$$
\begin{align}
 & \frac{d^{2}}{dS^{2}} \theta(S) = S \theta(S) \tag{6} \\ \\
& \begin{cases}
S = \bar{z} - \bar{E}  \\
\bar{z} = z/z_0 \\
\bar{E} = E_{z}/E_0 \\
z_0 = \left[ \frac{\hbar^{2}}{2~m~e~\varepsilon} \right]^{1/3} &&\leftarrow \text{characteristic length} \\
E_0 = \frac{\hbar^{2}}{2~m~z_0^{2}}  && \leftarrow \text{characteristic energy}
\end{cases}
\end{align}
$$

Equation (6) has two possible solution $A_{i}$ and $B_{i}$ of which only the first one is acceptable ($B_{i}$ diverges).

#todo add plot

We have to impose the boundary conditions (**continuity**) to the SE:  $\theta(z = 0) = 0$. Since the equation we have is in the variable $S$ we get 

$$
\displaylines{
z = 0 \iff S = -\bar{E}\\
\Downarrow \\
\theta(S = -\bar{E}) = 0
}
$$

This is true only in the values $C_{i}$ for which $A_{i} = 0$. This means (similarly to the infinite potential well) that the possible energy values are quantized:

$$
\begin{align}
 E_{z} &= |C_0| E_0 && \leftarrow ~ 1^{st} \text{ allowed energy value} \\
E_{z} &= |C_1| E_0 && \leftarrow ~ 2^{nd} \text{ allowed energy value} \\
 &&\vdots
\end{align}
$$

To plot the function for $z$, since $S = z - \bar{E}$, we have to shift the plot by $\bar{E}$. Knowing the possible values of $\bar{E}$ (which are the roots $C_{i}$), we just have to shift $\theta(S)$ to the right to put $C_{i}$ in the origin and discard everything for $z < 0$.
For each energy level we get a different wave function.

#todo add plots

From above ( #todo ) we know that $E = E_{xy} + E_{z}$ and thus:

$$
E = \frac{\hbar^{2}k^{2}}{2m} + |c_{n}|E_0 \tag{7}
$$



![[paraboloid subbands.png|400]]

## Density of states of a 2DEG

#todo add explanation

We calculate the DOS for one sub-band and then extend the results to the others. For simplicity we suppose that there is only one sub-band with vertex in the origin and thus:

$$
E = \frac{\hbar^{2}k^{2}}{2m} \tag{7b}
$$

Since we are in a 2D case, we normalize the DOS to the area, instead of the volume:

$$
D(E) = \frac{1}{A} \frac{dN(E)}{dE} \qquad A=L_{x}L_{y} 
$$
$$   
k_{x} = \frac{2\pi}{L_{x}} \cdot N_1 \quad k_{y} = \frac{2\pi}{L_{y}} \cdot N_2
$$

Now we can follow the same steps taken in the [[#Density of states (DOS)|original case]].

![[2DEG DOS.png|400]]

$$
N = \frac{\overbrace{ \pi k^{2} }^{ \text{area of circle} }}{\frac{2\pi}{L_{x}} \cdot \frac{2\pi}{L_{y}}} \cdot \underset{ \substack{ \uparrow \\ \text{spin} } }{ 2 } = A \frac{k^{2}}{2\pi}
$$

Using $(7b)$ we can rewrite $N$ as a function of $E$ 

$$
N(E) = \frac{A}{2\pi} \frac{2mE}{\hbar^{2}}
$$

And finally, for a given sub band:

$$
D(E) = \frac{1}{\cancel{ A }} \frac{m\cancel{ A }}{\pi \hbar^{2}} = \frac{m}{\pi \hbar^{2}}
$$

If we now consider all sub bands we get 

![[2DEG DOS 2.png|400]]

$$
D(E) = \frac{m}{\pi \hbar^{2}} \sum_{i=1}^{\infty} M(E - E_{i}) \\
$$

$$
M(E - E_{i}) = \begin{cases}
\begin{align}
1 && E \geq E_{i} \\
0 && E < E_{i}
\end{align}
\end{cases}
$$

