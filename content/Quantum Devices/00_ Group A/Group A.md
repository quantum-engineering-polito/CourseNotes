---
nextnote: "[[MOSFET]]"
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
# Crystalline semiconductors

Semiconductors are useful because we can modulate their conductivity with doping.

Let's consider three crystals made of identical atoms of group IV elements and their conductivity $\sigma$:

| $C$ (diamond)                               | $Si$                                      | $Sn$                                        |
| ------------------------------------------- | ----------------------------------------- | ------------------------------------------- |
| $\sigma \approx 0 \quad (\leq 10^{-8} S/m)$ | $10^{-8} S/m \leq \sigma \leq 10^{3} S/m$ | $\sigma \to \infty \quad (\geq 10^{3} S/m)$ |
| Insulator                                   | Semiconductor                             | Conductor                                   |


![[electron energy.svg|400]]

Since we are in group IV the 2 states of the S orbital and 2 out of the 6 states of the P orbital are occupied.

![[bands sketch.svg|400]]

For individual atoms the states are localized (i.e. electrons remain close to the nucleus), for the crystal instead the states are delocalized (electrons can be found anywhere in the crystal).

## Shockley's garage analogy

In the hypothesis that we are at 0$^{\circ}$K the 4N electrons occupy only the valence band: if the conduction band is empty no charge can move even if an electric field is applied. Charge cannot move in the valence band either since it's full.

At room temperature (300$^{\circ}$K) instead, some electrons can occupy the conduction band and thus a current can flow if an electric field is applied.

$$
n = \frac{\text{\# of electrons in CB}}{\text{volume}} \quad p = \frac{\text{\# of holes in VB}}{\text{volume}}
$$

In an intrinsic material (a pure crystal) $n = p = n_{i}$ where $n_{i}$ is the **intrinsic concentration**.

| $C$ (diamond)          | $Si$                                  | $Sn$                       |
| ---------------------- | ------------------------------------- | -------------------------- |
| $E_{g} = 5.47eV$           | $E_{g} = 1.12eV$                        | $E_{g} = 0.1eV$            |
| $n_{i} = 10 ~ cm^{-3}$ | $n_{i} = 1.45 \cdot 10^{10}~ cm^{-3}$ | $n_{i} = 10^{22}~ cm^{-3}$ |

## Effective mass theorem

- Electrons in the conduction band follow the laws of classical mechanics (Newton's laws) and behave as free particles with a mass equal to the **electron effective mass** $m_{n}^{*}$ (in $Si$ $m_{n}^{*} = 1.15\cdot m_{0}$ where $m_{0} = 9.1\cdot 10^{-31}~Kg$).
- Holes in the valence band follow the laws of classical mechanics (Newton's laws) and behave as free particles with a mass equal to the **hole effective mass** $m_{n}^{*}$ (in $Si$ $m_{p}^{*} = 1.07 \cdot m_{0}$).

## Chemistry interpretation

???
- - - 
Doping a material means substituting a limited amount of atoms of the crystal with a different element.  

![[intrinsic.svg|400]]

### N-type/Donor doping

An element of group V (for example $As$ in $Si$) is introduced in the crystal in place of another atom. Since the new atom has an extra electron which doesn't form any bond with the surrounding $Si$ atoms, the $As$ atom has **donated** an electron to the crystal; this is equivalent to the creation of a new **localized** state $E_{D}$ around the donor.

![[n doped.svg|400]]

If $E_{D}$ is close enough to $E_{C}$ the electron will be "promoted" to the conduction band. This results in having introduced one electron without adding any hole in the valence band. 

Being $N_{D}$ the number of donor atoms, the following relation has to be satisfied to have a meaningful effect without altering the material properties (too little $As$ atoms and it would make no difference, too many and we no longer have doped $Si$ but a compound of $As$ and $Si$).

$$
1.45 \times 10^{10}~cm^{-3} = n_{i} \ll N_{D} \ll d_{Si} \simeq 10^{22}~cm^{-3} 
$$

### P-type/Donor doping

In this case the added atom belongs to group III (for example $B$ in $Si$). Belonging to group III, the atom has a missing electron compared to $Si$ and thus one of the covalent bonds cannot be formed: the atom is **accepting** an electron. This corresponds to the creation of a new state $E_{A}$ localized around the $B$ atom.

![[p doped.svg|400]]

A similar relation can be found for the p type doping:

$$
n_{i} \ll N_{A} \ll d_{Si}
$$

## Evaluating n and p at thermal equilibrium

We want to evaluate the values of $n$ and $p$ at thermal equilibrium (no energy exchange with the environment). 

$$
\displaylines{
\begin{align}
&\text{- For electrons in the CB:} \\
&\quad n = \int_{E_{C}}^{E_{top}} dn(E) \, dE
\\\\
&\text{- For holes in the VB:} \\
&\quad p = \int_{E_{bottom}}^{E_{V}} dp(E) \, dE
\end{align}
}
$$

![[energy distribution.excalidraw.svg|200]]

Where 

$$
\displaylines{
dn(E) = N_{n}(E) \cdot f_{n}(E)
\\
dp(E) = N_{p}(E) \cdot f_{p}(E)
}
$$

>[!tip] $N_{n}(E)$ is the density of states  $D(E)$ for a given band from [[Models#Density of states (DOS)|condensed matter]]

$N(E)$ are the number of states available at $E$ per unit volume and unit energy and their value is as follows:

$$
\begin{align}
N_{n}(E) &= \gamma_{n} \sqrt{E - E_{C}}
\\
N_{p}(E) &= \gamma_{p} \sqrt{E - E_{V}}
\end{align}
$$
where $\gamma_{n}$ and $\gamma_{p}$ are constants depending only on the crystal.

![[NnNpE.excalidraw.svg|400]]

In the plot above (where the **independent** variable $E$ is on the vertical axis), it is possible to see that, if the energy is between $E_{V}$ and $E_{C}$, there are no available states.

The sign inversion for the energies present in the density of states for the holes is determined by the fact that the axis of the energies E used is referred to electrons, while the holes are charged with the opposite sign and therefore present an inverted axis of energies. In addition, the difference between the effective masses of electrons and holes is responsible for the different concavity of the two curves.

$f(E)$ is the probability of occupation of states at energy $E$. For electrons, at thermal equilibrium, it follows Fermi-Dirac statistics: ^7202aa

$$
f_{n}(E) = f(E) = \frac{1}{1 + e^{ (E-E_{F})/kT }}
$$

- $k$ is the **Boltzman constant** ($kT \approx 26 ~ meV ~ @ T = 300^{\circ}K$).
- $E_{F}$ is the **Fermi energy**, that is the energy for which a possible state has 50% occupation probability.

![[Drawing 2023-10-21 16.07.41.excalidraw.svg|500]]

Solving the integral above we get the following results 

$$
n = \underbrace{ (kT)^{3/2}  ~ \gamma_{n} \frac{\sqrt{ \pi }}{2} }_{ N_{C} } \mathcal{F}_{\frac{1}{2}} \left(\frac{ E_{F} - E_{C}}{kT} \right)
$$

where $\mathcal{F}_{\frac{1}{2}}$ is the Fermi integral function of order $1/2$ and $N_{C}$ is the **effective density of states** in the conduction band, it takes into account all the states in the conduction band as if they were concentrated at energy $E_{C}$.

For holes, knowing that $f_{p}(E) = 1 - f_{n}(E)$ (since holes represent a missing electron), we get 

$$
p = N_{V} \mathcal{F}_{\frac{1}{2}} \left(\frac{ E_{V}-E_{F}}{kT} \right)
$$

with $N_{V}$ the effective density of states in the valence band.

For non-degenerate semiconductors (where $E_{V} < E_{F} < E_{C}$) it is possible to approximate $\mathcal{F}_{\frac{1}{2}}(x) \simeq e^{ x }$ (**Boltzman approximation**) and so:

$$
\begin{cases}
n \simeq N_{C} ~ e^{ (E_{F} - E_{C})/kT }
\\\\
p \simeq N_{V} ~ e^{ (E_{V} - E_{F})/kT }
\end{cases}
$$


### Intrinsic Fermi level

In an intrinsic semiconductor, an electron that gained enough energy to be in the conduction band must have left a free state (hole) in the valence band. For this reason $n = p = n_{i}$ where the $i$ means intrinsic.

For intrinsic semiconductors the Fermi level is denoted as $E_{Fi}$ and can be calculated using the two previous relations:

$$
\displaylines{
 n = p \\
 \Downarrow \\
 N_{C} ~ e^{ -(E_{C} - E_{Fi})/kT } = N_{V} ~ e^{ -(E_{Fi} - E_{V})/kT }
}
$$
$$
\displaylines{
\begin{align}
\frac{N_{C}}{N_{V}} &= \frac{e^{ -(E_{Fi} - E_{V})/kT }}{e^{ -(E_{C} - E_{Fi})/kT }} \\
 &=e^{ -\frac{E_{Fi}-E_{V}}{kT} + \frac{E_{C} - E_{Fi}}{kT}} \\
&= e^{ \frac{E_{C} + E_{V} - 2 E_{Fi}}{kT} }
\end{align} \\
\Downarrow \\
kT \ln \frac{N_{C}}{N_{V}} = E_{C} + E_{V} - 2 E_{Fi} \\
E_{Fi} = \underbrace{ \frac{E_{C} + E_{V}}{2} }_{ \substack{ \text{center of }  \\ \text{the band gap}}} - \frac{kT}{2} \ln \frac{N_{C}}{N_{V}}
}
$$
For materials where $m_{n}^{*}/m_{p}^{*} \simeq 1$ (almost all cases) $N_{C}/N_{V} \simeq 1$ and thus $E_{Fi}$ can be approximated with the center of the band gap.


### Calculating n and p in intrinsic semiconductors