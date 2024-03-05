---
nextnote: "[[Fermi golden rule]]"
author: Giacomo, BabelDev0
authorlink: https://github.com/gamberoillecito,https://github.com/BabelDev0
---
# Overview of the contents

Our goals are:

- find out how many charge carriers are present within the crystal
- where and how are they placed inside the crystal
- how do they move inside the crystal

to find out the answer to these questions we use models to help us approximate reality, of course like all models, these can only be used by making assumptions about their validity.

# Free and independent electron model

The free-electron model, in solid-state physics, simplifies metals as containers filled with a gas composed of free electrons. These electrons are considered unbound to any particular atom and are able to move freely throughout the material. 

Electrons in the model are:

- **Independent**: we can neglect interaction between electrons (Coulomb repulsion)
- **Free**: we assume that the potential inside the crystal is $V = 0$ 

Let's consider a crystal of macroscopic dimensions ($L_{x}, L_{y}, L_{z}$) and define a reference system as shown below.

![[ref cube.svg|300]]

considering only one dimension at a time, this scenario is reminiscent of the infinity square well

![[infinit_square_well_QCMP.svg|350]]

We can then write the Schrödinger equation (SE)

$$-\frac{\hbar}{2m} \nabla^{2} \Psi(\bar{r}) = E \Psi (\bar{r})$$

for which we can write the general solution: 

$$
\Psi(\bar{r}) = \frac{1}{\sqrt{ \mathbf{V} }} e^{ i \bar{k} \bar{r} } \quad (\mathbf{V} = L_{x} \cdot L_{y} \cdot L_{z}) \tag{1}
$$

and the eigenvalues:

$$
E = \frac{\hbar^{2} k^{2}}{2m}
$$

We want to study the properties of the material without worrying about the possibility of getting out of it (where the properties we are interested in no longer apply). So we apply an approximation by imagining that the lattice of the crystal continues to infinity. What we do is saying that instead of going "outside" the crystal, we enter in an identical one (i.e. we imagine being in a periodic matrix of crystals one next to the other).

This is called **periodic boundary condition** (PBC) or **Born Von Karman condition** and can be written as follows:  ^dedc30

$$
\displaylines{
\Psi(x, y, z) &= \Psi(x + L_{x}, y, z) \\
& = \Psi(x, y + L_{y}, z)\\
&= \Psi (x, y, z + L_{z})\\
} \tag{PBC}
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

Since $L_{x}, L_{y}, L_{z}$ are macroscopic dimensions each $k$ can be approximated as being continuous. ^4d5fdd

We also know the following 

$$
\begin{cases}

E = \frac{\hbar^{2} k^{2}}{2m} \qquad (2)\\
p = \hbar \cdot k \qquad
\end{cases}
$$

$p$ is obtained from the [De Broglie relations](https://en.wikipedia.org/wiki/De_Broglie_relations "De Broglie relations")

The objective is to determine the quantity of charge carriers within a crystal. 

Instead of directly counting them, we know that each charge carrier occupies a state, so we can use this formula to derive the number of charge carriers:

$$ 
n = \int D(E) f(E,T)\, dE 
$$
where:

- $n$ represents the total number of charge carriers in the crystal.
- $D(E)$ denotes the density of states.
- $f(E,T)$ corresponds to the Fermi-Dirac distribution for a given temperature $T$

In essence, this formula calculates the number of charge carriers by summing up, over infinitesimally small energy intervals, the product of the density of states at a particular energy level and the probability that the corresponding states are occupied by electrons (charge carriers).

Let's derive the components of this formula.

# Density of states (DOS)

DOS describes how the energy levels created by the lattice structure are distributed; it is defined as follows:

$$
D(E) = \frac{1}{V} \frac{dN(E)}{dE} \quad \left[ \frac{1}{cm^{3} \cdot eV} \right]
$$

^3829fb

Where $\frac{dN(E)}{dE}$ is the number of energy states $N(E)$ within an energy range $dE$.

We can find $N(E)$ geometrically reasoning on the following picture.

![[numberOfStates.png|400]]

Since $k$ and $E$ are related by $(2)$ we can find first $N(k)$ and then obtain $N(E)$. 
$$
k = \sqrt{ \frac{2mE}{\hbar^{2}} } \tag{3}
$$

$N(E)$ can be calculated as the volume of a sphere of radius $k$ divided by the volume occupied by one energy state (the highlighted cube) :

$$
\begin{align}
N(k) &= \overset{ \substack{spins \\ \downarrow} }{ 2 } \frac{4/3 \pi k^{3}}{(2 \pi)^{3}/V} \\ 
N(E) &\overset{ (3) }{ = } \frac{8/3 \pi \left( \frac{2mE}{\hbar^{2}} \right)^{3/2}}{8 \pi^{3}/V} \\ 
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

**In 3D the $D(E)$ is proportional to the $\sqrt{E}$**

# Fermi-Dirac distribution

Fermi-Dirac distribution gives the probability of a given energy state of being occupied at a given temperature.

$$
\displaylines{
f(E, T) = \frac{1}{e^{ \frac{E - E_{F}}{KT} } + 1} \\\\
\lim_{ T \to 0 } f(E, T) = \begin{cases}
1 \quad E < E_{F} \\
0 \quad E > E_{F}
\end{cases} 
}
$$


<iframe scrolling="no" title="Fermi-Dirac Distribution" src="https://www.geogebra.org/material/iframe/id/buz52m7a/width/1613/height/900/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="500px" height="400px" style="border:0px;"> </iframe>

![[fermidirac.excalidraw.svg|400]]


The Fermi-Dirac distribution relies on the assumption of a continuous spread of energy states. While in metals, the values of $k$s appear nearly continuous, this isn't the case for semiconductors and insulators. In semiconductors, a distinct energy gap exists, with no available states for electrons. Consequently, the ==Fermi-Dirac model inadequately portrays materials like insulators or semiconductors== due to this significant deviation from its assumptions.

# Independent electrons model

This model improves the previous one by dropping the "free electrons" assumption. This implies that in this case the  potential is periodic, generated by atoms arranged in the lattice fashion: 

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

>[!note]
>See also [[Bloch theorem]]

Bloch's theorem states that solutions to the Schrödinger equation in a periodic potential can be expressed as plane waves modulated by periodic functions. 

$$
\displaylines{
\Psi_{\bar{k}}(\bar{r}) = e^{ i \bar{k} \bar{r} } \cdot \mu_{\bar{k}}(\bar{r}) \\
\mu_{\bar{k}}(\bar{r}) = \mu_{\bar{k}}(\bar{r} + \bar{R}_{n})
}
$$

$\mu_{\bar{k}}(\bar{r})$ is a periodic function with the same periodicity as the crystal.

The equality above can also be written as 

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

The usefulness of Bloch's theorem is that it allows us to restrict the search for the solution of Schrödinger equation from the entire space to the space of periodic functions. That is, functions that were once described in the unit cell can be extended beyond it periodically.

Similarly to what we did before we need to find $\bar{k}$ that satisfies the following conditions (we will only consider the $x$ direction but the same can be done for $y$ and $z$): 

$$

\begin{align}
1)\quad& \Psi_{\bar{k}}(\bar{r} + \bar{R}_{n}) = \Psi_{\bar{k}}(\bar{r}) \cdot e^{ i \bar{k} \bar{R}_{n} } \\
2) \quad& PBC\quad
\Psi_{\bar{k}}(\bar{r} + N_{1} \bar{a}_{1}) = \Psi_{\bar{k}}(\bar{r}) \leftarrow \text{ periodicity along } \bar{x}
\end{align}

$$

Since $N_{1} \bar{a}_{1}$ is one of the $\bar{R}_{n}$ we can rewrite $1)$ as 

$$
1\text{ bis})\quad \Psi_{\bar{k}}(\bar{r} + N_{1} \bar{a}_{1}) = \Psi_{\bar{k}}(\bar{r}) e^{ i \bar{k} (N_{1} \bar{a}_{1}) }
$$

In order to satisfy $1 \text{ bis})$ and $2)$ we need that the exponential is $= 1$ which means 

$$ 
\displaylines{
\Psi_{\bar{k}}(\bar{r} + N_{1} \bar{a}_{1}) \overset{ \substack{1\ bis)} }{ = } \Psi_{\bar{k}}(\bar{r}) e^{ i \bar{k} (N_{1} \bar{a}_{1})} \overset{ \substack{2)} }{ = } \Psi_{\bar{k}}(\bar{r}) \\
\Downarrow \\
e^{ i \bar{k} (N_{1} \bar{a}_{1})} = 1 \\
\Downarrow \\
{\color{red} N_{1} ~ \bar{k} ~ \bar{a}_{1} = 2 \pi n_{x}} \quad (*)
} 
$$
Since $\bar{k}$ is $\left[\frac{1}{\text{length}}\right]$ it belongs to the reciprocal space and can thus be written as
$$
\bar{k} = x_{1} \bar{g}_{1} + x_{2} \bar{g}_{2} + x_{3} \bar{g}_{3}
$$

Remembering the [[Crystals#Reciprocal lattice|reciprocal lattice definition]] 

$$
\bar{a}_{i}\cdot \bar{g}_{j} = 2 \pi \delta_{ij}
$$

and by rewriting $(*)$ as 

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
x_{3} = \frac{n_{z}}{N_{3}}
\end{cases}
$$

So, finally, $\bar{k}$ can be rewritten as 

$$
\bar{k} = \frac{n_{x}}{N_{1}} \bar{g}_{1} + \frac{n_{y}}{N_{2}} \bar{g}_{2} + \frac{n_{z}}{N_{3}} \bar{g}_{3}
$$

this resembles a $\bar{G}$ vector but we have to remember that $n_{\text{dir}}/N_{i}$ is not necessarily an integer.

![[Ntot.svg|400]]

From the drawing we can see that along the $x$ direction there are $N_{1}$ allowed $\bar{k}$ vector. Since the Brillouin zone has the same area as the green one (which is a primitive cell of the reciprocal lattice), both of them can fit $N_{tot} = N_{1} N_{2} N_{3}$ $\bar{k}$ vectors.

## Property of the Bloch state

Solutions of the Schrödinger equation that differ only by a reciprocal vector are equivalent (they describe the same physical state)

$$
\Psi_{\bar{k} + \bar{G}}(\bar{r}) = \Psi_{\bar{k}}(\bar{r}) \tag{4}
$$
![[Bloch_theorem_property.svg|400]]

Given the property above, we can say that, given $\hat{H} \Psi_{\bar{k}}(\bar{r}) = E_{\bar{k}}\Psi_{\bar{k}}(\bar{r})$:

$$
\displaylines{
\hat{H} ~ \Psi_{\bar{k}+\bar{G}}(\bar{r}) = E_{\bar{k}+\bar{G}} ~ \Psi_{\bar{k} + \bar{G}}(\bar{r}) \\
\hat{H} ~ \Psi_{\bar{k}}(\bar{r}) \overset{ (4) }{ = } E_{\bar{k} + \bar{G}} ~ \Psi_{\bar{k}}(\bar{r}) \\
\Downarrow \\
{\color{red} E_{\bar{k} + \bar{G}} = E_{\bar{k}}} 
}
$$

So the eigenvalues are periodic.

![[bloch_theorem_band.svg|700]]

In the (example) drawing above the energy bands are represented only between $- \pi / a_{1}$ and  $\pi / a_{1}$ because $E_{\bar{k}}$ is periodic.

It is important to notice that, differently from the [[#Free and independent electron model|free and independent electron model]] here the energy does not go continuously from $-\infty$ to $+\infty$ and thus the behaviour of semiconductors and insulators can be explained.

### Example

Let's consider the case of a solid made out of cells with only 1 atom with 1 electron.

We want to see:
1) if the material behaves as a metal, a semiconductor or an insulator.
2) if its properties depend on the size.

#todo improve drawing

![[SmartSelect_20240110_094641_Samsung Notes.jpg]]

Notice that the red lines in the drawing are not continuous in reality for the reasons stated [[#^4d5fdd|previously]]; this show that there are only $N_{tot}$ allowed $\bar{k}$ vectors between  $- \pi / a_{1}$ and  $\pi / a_{1}$ and thus $N_{tot}$ allowed energy states (the orange dots). 

Considering that we have $N_{tot}$ electrons (1 electron in 1 atom in 1 cell) and that the Pauli exclusion principle allows 2 electrons in each state, only half of the first band is occupied.

If we were to double the size of the sample nothing would change since there would be $2N_{tot}$ electrons and $2N_{tot}$ allowed $\bar{k}$ vectors.

## Effective mass

Recalling the definition of density of states, we can draw a very simplified plot of $D(E)$ and $E$ (on the left) and the probability of occupation ([[Group A#^7202aa|see group A notes]]):

![[DOS and prob.excalidraw.png|600]]

At $T = 0K$ the probability is $0$ above the fermi energy, and $1$ below, thus the valence band will be fully occupied and the conduction band will be empty.

For temperatures above $0K$, on the other hand, some electrons (in yellow) will be excited to the conduction band. These electrons do not behave as free particles and their mass is not the same as the one of the free electron. 

Talking about the behaviour of electrons let's try to analysing their mass, in the case of the free particle we have that the relation between mass, energy and momentum is straightforward:

$$
\displaylines{
E = \frac{p^2}{2m} \quad \text{so the mass is}
\\\\
m = \frac{p^2}{2E} = \frac{\hbar^{2}k^{2}}{2E}
}
$$

but now we are inside the crystal and the relation is more complex.

![[band_diagram_relation_wavenumber.svg|350]]


at each $k$ value corresponds different $E$ and $m$ value. We can simplify the description of the behaviour of these electrons comparing their motion to that of free particles with different masses in a vacuum, to do that we define the **effective mass** as:

$$
m^{*}_{ij} = \frac{\hbar^{2}}{\left[ \frac{\partial^{2} E}{\partial k_{i} \partial k_{j}}\right]}
$$

the motion of the electron can now be described by

$$ F=m^{*}a $$

It is important to notice that the effective mass depends on the curvature of the band, since the potential changes depending on the structure of the lattice.
The core electrons, the ones near the nucleus, have $m^{*} \to \infty$.

The effective mass is a result of the interaction between the particle (like an electron) and its surroundings (the crystal lattice). In an anisotropic crystal (where properties differ along different axes), the effective mass can vary based on the direction in which the particle moves or interacts within the material. However, in an isotropic crystal, this mass remains the same regardless of the direction.

# Effective mass and energy

The plots below show a representation of two energy bands (in blue) and the relative effective mass associated to them (in red).

![[effective mass.excalidraw.png|600]]

The yellow regions highlight the fact that where the band have a parabolic shape, the effective mass is constant (since it depends on the second derivative of the energy). In this region the mass can be calculate as always:

$$
m = \frac{p^2}{2E}
$$

Where the energy has an inflection point the effective mass will tend to $\pm \infty$.

Finally, we can notice that in the left plots the effective mass has lower absolute values since the second derivative of the energy is greater compared to the right plot.

Since electrons can have a negative effective mass, it is possible to consider them as fictitious particles with a positive mass and opposite charge called **holes**.

# Parabolic band approximation

![[band_parabolic_approximation.png|500]]

Near the maximum and minimum regions, the bands can be approximated with a parabola as long as we use the correct curvature for that parabola.

# Substitutional impurities in semiconductors

Defects usually change the band structure generating new states in the energy gap, this is the case with doping (which is a substitutional impurity).

![[doping_band_structure.svg]]

## Example: $P$ in $Si$

Substituting a $Si$ atom with a $P$ atom (which has one extra electron) will form a **hydrogenic species** (similarly to hydrogen there is only one electron and a positive charge in the middle with charge $+q\,$).
![[Hydrogen_species.png|400]]

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
