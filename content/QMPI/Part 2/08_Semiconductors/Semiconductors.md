---
nextnote: "[[Phonons]]"
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
#todo (maybe) add difference between direct and indirect bg

# Chemical potential

From a thermodynamic point of view, a system has internal energy 

$$
dU = T~dS - p ~ d\mathbf{V} + \mu ~ dN
$$

where:

- $U$ is the internal energy
- $T$ is the absolute temperature
- $S$ is the entropy
- $\mathbf{V}$ is the volume
- $N$ is the number of particles

$\mu~dN$ is the increase of internal energy related to the increase of particles number.

The chemical potential is defined as 

$$
\boxed{ \mu \triangleq \frac{ \partial U }{ \partial N}\Bigg|_{S,\mathbf{V}}  }
$$

In our case, where we have a system of fermions, the chemical potential is close to the Fermi energy.

#todo fermi level, fermi energy and chemical potential???

# Semiconductors

The difference between insulators and semiconductors is not very strict but we can say that if the bandgap is $\simeq 1~\text{eV}$ then the presence of electrons in the conduction band is not negligible and we have a semiconductor.

![[Semiconductors vs insulators.png|400]]

From now on we will use a parabolic approximation of the bands since we are mostly interested in studying them near their maximum/minimum.

## Intrinsic semiconductors

### Charge densities

In intrinsic semiconductors "free" electrons and holes are created only by thermal excitation of the electrons from the valence band to the conduction band.

The charge densities of electrons and holes are: 

$$
\begin{align}
n &= \int_{E_{C}}^{+\infty} D_{C}(E) f(E,T) \, dx \\
p &= \int_{-\infty}^{E_{V}} D_{V}(E) \big(1 -f(E,T)\big) \, dx 
\end{align} \tag{1}
$$

The limits of integration tends to $\infty$ since $f(E,T) \simeq 0 \text{ for } E \gg E_C$ and $1-f(E,T) \simeq 0 \text{ for } E \ll E_V$.

### Density of states

>[!quote] Ibach Luth, 12.2

The DOS for "free" electrons and holes are the ones we calculated for [[Free electron model#Density of states|free electrons]] provided that we use the effective masses: 

$$
\begin{align}
&D_{C}(E) = \frac{(2m_{n}^{*})^{3/2}}{2 \pi^{2} \hbar^{3}} (E - E_C)^{1/2} && E > E_C\\\\
&D_{V}(E) = \frac{(2m_{p}^{*})^{3/2}}{2 \pi^{2} \hbar^{3}} (E_V - E)^{1/2} && E < E_V \\ \\
&D = 0 && E_V < E < E_C \quad\text{(in the gap)} 
\end{align}
$$

![[density of states.png|300]]

### Calculation of n and p

To make the calculation easier, we can notice that when we are in the conduction band, we work in the "tail" of the Fermi Dirac and thus we can approximate it with the Boltzmann distribution: 

$$
\begin{cases}
f(E,T) = \frac{1}{\exp\left[ \frac{E - E_F}{k_{B}T} \right] + 1} \overset{{\color{red}  \substack{ E - E_F \ll k_{B}T  \\\downarrow }} }{ \simeq  } &&\exp\left[ -\frac{E - E_F}{k_{B}T} \right]  && E > E_C && \text{(electrons)}\\ \\

\big[1 - f(E,T)\big] \underset{ {\color{red} \substack{ \uparrow \\-(E - E_F) \gg k_{B}T }} }{ \simeq  } && \exp\left[ \frac{E - E_F}{k_{B}T} \right] && E < E_V && \text{(holes)}
\end{cases}
$$

$n$ and $p$ can be calculated using $(1)$ (**calculations omitted**), getting:

$$
\boxed{n = N_{eff}^{C} \cdot e^{ -(E_C-E_F)/ k_{B}T}}
$$

^13af5e

$$
\boxed{p = N_{eff}^{V} \cdot e^{ (E_V-E_F)/ k_{B}T}}
$$

Where $N_{eff}$ are the **effective densities of states**:  ^bf1b5a

$$
\displaylines{
N_{eff}^{C} = 2 \left( \frac{2 \pi ~m_{n}^{*}~ k_{B}T}{n^{2}} \right)^{3/2}  \\
N_{eff}^{V} = 2 \left( \frac{2 \pi ~m_{p}^{*}~ k_{B}T}{n^{2}} \right)^{3/2}
}
$$

^ba7b73

This values are valid only under the approximation we did at the beginning, which is called approximation of **non degeneracy**.

## Law of mass action


$$
\begin{align}
n\cdot p &= N_{eff}^{C} e^{ -(E_C - E_F)/k_{B}T } \cdot N_{eff}^{V} e^{ (E_V - E_F)/k_{B}T } \\ \\

&= N_{eff}^{C} ~ N_{eff}^{V} e^{ -(E_C - E_V)/k_{B}T } \\ \\
\end{align}
$$
Considering that $E_{g} = E_C - E_V$, the product $n\cdot p$ can be written as a function of the energy gap only 

$$
\boxed{ n\cdot p = N_{eff}^{C} ~ N_{eff}^{V} e^{ -E_{g}/k_{B}T } }
$$

### For intrinsic semiconductors

#todo 

#### Calculation of Fermi level for intrinsic semiconductors

Since $n = p$ we can write 

$$
\begin{align}
N_{eff}^{C} e^{ -(E_C - E_F)/k_{B}T } &= N_{eff}^{V} e^{ (E_V - E_F)/k_{B}T } \\ \\

e^{ -E_C/k_{B}T } \cdot e^{ E_F/k_{B}T } &= \frac{N_{eff}^{V}}{N_{eff}^{C}}\cdot e^{ E_V/k_{B}T } \cdot e^{ - E_F /k_{B}T } \\ \\
e^{ 2E_F/k_{B}T} &=\frac{N_{eff}^{V}}{N_{eff}^{C}}\cdot e^{ (E_V + E_C)/k_{B}T } \\ \\
\frac{2E_F}{k_{B}T} &= \ln\left( \frac{N_{eff}^{V}}{N_{eff}^{C}} \right) + \frac{E_V+E_C}{k_{B}T} \\
& \big\Downarrow  \\
E_F &= \frac{E_C + E_V}{2} + \frac{k_{B}T}{2} \ln\left( \frac{N_{eff}^{V}}{E_{eff}^{C}} \right)
\end{align}
$$

Which, looking at the [[#^ba7b73|definition of effective density of states]] can also be written as:

$$

\boxed{ E_F = \underbrace{ \frac{E_C + E_V}{2} }_{ \substack{\text{in the middle} \\ \text{of the gap}} } + \underbrace{ \frac{3}{4}k_{B}T }_{ \substack{\text{linear} \\ \text{dependence} \\ \text{ on temperature}} } \cdot \underbrace{ \ln\left( \frac{m_{p}^{*}}{m_{n}^{*}} \right) }_{ \substack{\text{log. dependence} \\ \text{on the effective mass} \\ \text{(=0 if the masses are equal)}} }  }
$$

# Doping

>[!quote] Ibach Luth, 12.3

We can use doping to accurately control the values of $n$ and $p$.

For **n doping** we can introduce a **donor** atom in the lattice which will introduce a new electron in the lattice. We expect the electron to be weakly bounded to the donor atom and thus to behave similarly to a free electron.

The system composed of the donor ion and the electron is similar to the **hydrogen atom** (a positive charge in the middle and an electron around it).

For the hydrogen atom the energetic levels are 

$$
E_{n}^{H} = \frac{m_{e} e^{ 4 }}{2(4 \pi \varepsilon_0 \hbar)^{2}} \cdot \frac{1}{n^{2}}
$$

As a first approximation we can use this formula to study our system changing the mass of the electron with the effective mass and including also the dielectric constant of $Si$ in addition to $\varepsilon_0$: 

$$
E_{n}^{D} = \frac{m_{n}^{*} e^{ 4 }}{2(4 \pi \varepsilon_{Si} \varepsilon_{0} \hbar)^{2}} \cdot \frac{1}{n^{2}}
$$

Performing the calculation we get that $E_{d} \simeq 30 ~m \text{eV}$ which is similar to the thermal energy. This means that the charges can be easily promoted to the conduction band.

#todo add drawing

![[acceptor_donor levels.png|400]]

Since we are considering the hydrogen atom, we can also estimate the distance between the electron and the ion using the formula for the Bohr radius adjusted for silicon, getting: 

$$
r = \varepsilon_0 \varepsilon_{Si} \frac{h^{2}}{\pi m_{n}^{*} e^{2}}
$$

which is of the order of $10^{3}$ lattice sites, meaning that the electron can move almost freely.

For **p doping** the process is the same but we use an **acceptor atom** from group *III*.

## Carrier densities in doped semiconductors

![[doped semicond energies.png|400]]

In the image above we can have three different kinds of charge motion: we can have **electrons** that moves from donors to the conduction band creating $N_{D}^{+}$ positive ions, we can have electrons moving from the valence band to acceptors creating $N_{A}^{-}$ negative ions (this also creates holes in the valence band); finally we can have electrons that move from the valence band to the conduction band through thermal excitation.

Donors and acceptor do not necessarily need to be ionized, we see in fact $N_{D}^{0}$ and $N_{A}^{0}$ neutral donors and acceptors.

The total number of donors and acceptors will be given by the sum of the ionized and non ionized atoms: 

$$
\displaylines{
N_{D} = N_{D}^{+} + N_{D}^{0} \\
N_{A} = N_{A}^{-} + N_{A}^{0}
}\tag{2}
$$

Since the material is globally neutral, we must have that the negative charges must be compensated for by the positive ones, thus having 

$$
n + N_{A}^{-} = p + N_{D}^{+} \tag{charge neutrality}
$$

Since in practical application we only use one kind of doping (for example donors in this case), and the number of thermally generated holes can be neglected; we can write 

$$
n + \cancel{ N_{A}^{-} } = \cancel{ p } + N_{D}^{+} \tag{3}
$$

Furthermore, we can still use the **Boltzmann approximation** like [[#^13af5e|before]] to calculate $n$ ( #todo why can we do this? we are not in an intrinsic semiconductor. Is it because we are still working near the "tail"?).

To evaluate the number of neutral donors we need to use the Fermi Dirac statistics since the difference between $E_{D}$ and $E_{C}$ is comparable to $k_{B}T$: 

$$
N_{D}^{0} = N_{D} \cdot f(E,T) = \frac{N_{D}}{\exp[(E_{D} - E_F)/k_{B}T] + 1} \tag{4}
$$

Using $(2)$, $(3)$ and $(4)$ we can write 

$$
\begin{align}
n &= N_{D}^{+}  \\
&= N_{D} - N_{D}^{0}  \\
&= N_{D} - \frac{N_{D}}{{\color{blue} \exp[(E_{D} - E_F)/k_{B}T]}  + 1}
\end{align}
$$

We can proceed by obtaining the exponential in blue above from the [[#^13af5e|Boltzmann approximation]] and substituting it to calculate $n$, obtaining (**calculation omitted**): 

$$
\boxed{ n = 2N_{D} \left[ 1 + \sqrt{ 1 + \frac{4N_{D}}{N_{eff}^{C}} e^{ E_{d}/k_{B}T } } \right]^{-1} } \tag{5}
$$

We now want to study what happens in different temperature ranges to better understand what the formula means:

### Low temperature regime (freeze-out range)

If $T$ tends to $0$ the exponential is large, meaning that the second term under square root is dominant and we get 

$$
n \simeq N_{D} \left[ \sqrt{ \frac{N_{D}}{N_{eff}^{C} e^{ E_{d}/k_{B}T }} } \right] = \sqrt{ N_{D} N_{eff}^{C} } \cdot e^{ -E_{d}/2k_{B}T }\qquad T \to 0
$$

this is similar to what happened for [[#Intrinsic semiconductors|intrinsic semiconductors]]. Because of this similarity we can deduce that, at very low temperatures, the Fermi level lies near the bottom of the conduction band.

In this region most donors retains their valence electrons and thus are not ionized ( #todo how do we see this from the formula?)

### Sufficiently high temperature regime (saturation range)

In this case the exponential in $(5)$ can be neglected, getting 

$$
n \simeq N_{D} = \text{constant}
$$

which means that

> the concentration of donor electrons in the conduction band has reached the maximum possible value, equal to the concentration of donors. (Ibach Luth)

This is the range where devices usually work.

### Even higher temperature (intrinsic range)

In this case the number of thermally excited electrons becomes dominant with respect to the ones coming from dopants and we go back to the intrinsic behaviour.

We can plot these three ranges as follows:

![[temperature regions.png|400]]

# Mobility (very brief introduction)

The mobility $\mu$ is defined as 

$$
\mu = \frac{|\text{velocity of the charges}|}{\text{applied electric field}} =\frac{|v|}{\varepsilon}
$$

Since the velocity $v$ can be written as $v = e \tau \varepsilon /m$ with $\tau$ the mean time between collisions, the mobility can also be written as 

$$
\displaylines{
\mu_{n} = e \frac{\tau_{n}}{m_{n}^{*}}\\
\mu_{p} = e \frac{\tau_{p}}{m_{n}^{*}}
}
$$

The conductivity can be written taking into consideration the contribution of both holes and electrons as follows 

$$
\sigma = (n\cdot e \cdot \mu_{n} + p \cdot e \cdot \mu_{p})
$$
