---
nextnote: "[[Quantum Dots]]"
author: BabelDev0,Giacomo
authorlink: https://github.com/BabelDev0,https://github.com/gamberoillecito
draft: false
---
# Conductance

Formula for the conductance in a material

$$
G = \frac{A}{L} \eta
$$
where $A$ is the cross-section $L$ is the length and $\eta$ is the material dependent conductivity.

# Ballistic transport

Ballistic transport refers to the condition where electrons or other charge carriers move through a material without being scattered by impurities, defects, or lattice vibrations within that material. In typical conductive materials, electrons often collide with atoms and other electrons, which scatter them in different directions. This scattering limits the flow of current and contributes to electrical resistance. However, in ballistic transport, electrons can travel through the conductor (often a very thin or very clean wire, or a nanoscale device) at high speeds and over relatively long distances without scattering. 

**This happens when the dimensions of the material are shorter than the mean free path of the electrons, which is the average distance an electron travels between collisions.** 

Definition of mean free path:

$$
\lambda = v_{f}\cdot t
$$

where $v_f$ is the electron speed at Fermi level and $t$ is the average time between collisions.

$$
\boxed{ \text{Ballistic transport} \implies \text{Mean free path} > \text{Wire dimension} }
$$

# Ideal quantum wire

![[Ideal_wire.png]]

We make some assumptions to simplify the scenario and be able to arrive at the result:

- No scattering event, transport in the channel is **perfectly ballistic**
- The electrons entering the reservoir contacts are instantaneously in equilibrium with them.
- Contacts are reflectionless: the transmission probability from wire to contact is unitary
- Temperature=0
- The chemical potential of the left side its higher than the chemical potential of the right side $\mu_{L} > \mu_{R}$ so that electrons will flow to the right

Let's see the solution of the Schrödinger equation for the wire, which we already know them from [[Quantum Wire]]:

$$
\displaylines{
E = \frac{\hbar^{2}\pi^{2}n^{2}_{x}}{2ma_{x}^{2}}+
\frac{\hbar^{2}\pi^{2}n^{2}_{y}}{2ma_{y}^{2}}
+\frac{\hbar^{2}k_{z}}{2m} \implies
\\\\
E_{n,k_{z}} = \varepsilon_{n}+\frac{\hbar^{2}k_{z}}{2m}
}
$$

## Simplified case: single band

Now, recalling the definition of the current from the classical physics:

$$
I = \frac{dQ}{dt}
$$

where the total charge in a small volume of length $dz$ is :

$$
dQ = en_{e}Adz
$$

so we can write:

$$
I = \frac{dQ}{dt} = en_{e}~A \frac{d_{z}}{d_t} = en_{e}~A v_{z}
$$

**The goal is to write the current as a function of the energy since it is what changes from left to right**. The number of electrons in the wire is:

$$
N = n_{e}AL
$$

We can substitute this expression in the formula above to get the current as a function of the number of electrons:

$$
I = \frac{e}{L}Nv_{z}
$$

We want to write the current as function of the energy. We take an infinitesimal of $I$ and write it as dependent on $dE$:

$$
d I = \frac{e}{L} v_{z} ~d N
$$
$v_{z}$ can be written as follows considering the definition of group velocity ($v_{z} = d \omega / d k_{z}$) and the relation $E = \hbar \omega$: 

$$
v_{z} = \frac{1}{\hbar} \frac{ d E }{ d k_{z} } 
$$

We get 

$$
d I = \frac{e}{L} \frac{1}{\hbar} \frac{ d E }{ d k_{z} } d N \tag{1}
$$

The last piece to get to the desired formula is $dN$. We can calculate it considering that the number of $k$ states allowed, $dN$, within a $dk$ is given by their minimal spacing that is $2\pi /L$.

![[dN.png|300]]

Taking into account also the spin degeneracy (which doubles the number of states), we get: 

$$
dN = 2 \left( \frac{2\pi}{L} \right)^{-1} d k_{z}
$$

Substituting this expression in $(1)$ we get: 

$$
\displaylines{
dI = \frac{e}{\cancel{ L }} \frac{2\cancel{ L }}{\pi} ~ \cancel{ dk_{z} } \frac{1}{\hbar} \frac{dE}{\cancel{ dk_{z} }} \\
\Downarrow \\
\boxed{dI = \frac{2e}{\hbar} dE}
}
$$
Finally, the total current $I$ can be calculated as the difference between left and right current: 

$$
I = I_\text{L-R} - I_\text{R-L}
$$

Now that we have an expression for $dI$ we can simply integrate it to get 

$$
\begin{align}
I_\text{L-R} &= \int_{0}^{\mu_{L} = \mu_{R} +e V}  dI &&= \frac{2e}{\hbar}  \int_{0}^{\mu_{L} = \mu_{R} +e V} dE \\\\
I_\text{R-L} &= \int_{0}^{\mu_{R}}  dI &&= \frac{2e}{\hbar}  \int_{0}^{\mu_{R}} dE 
\end{align}
$$


$$
\displaylines{
\Downarrow  \\
I = \frac{2e}{\hbar}(E_{R} - E_{L}) = \frac{2e}{\hbar} e(v_{R} - v_{L}) \\
\Downarrow \\
\boxed{I = \frac{2e^{2}}{\hbar} \Delta V = G_0 \Delta V}
}
$$

The factor $G_0$ is called **quantum of conductance**.

In summary, we have shown that the conductance of a one-dimensional system with one occupied subband only depends on fundamental constants, namely the elementary charge $e$ and the Planck constant $h$. Importantly, it does not depend on the dispersion relation $E(k)$ or the Fermi energy $E_F$.

## Multiple bands

In this case the ideal wire is made of multiple bands, each band contributes to the current.

![[multiple_bands.png|350]]

*Situation A is the previous one while situation B is the general case.*

To find the current energy relation in this case we need to make an approximation.

## Linear response approximation

We need to prevent $\mu_{L}$ and $\mu_{R}$ to be on a different number of bands, thus we impose $\mu_{L}-\mu_{R}= ~\text{eV} \ll K_{B}T$

![[linea_response_approx.png|300]]

In this case the current $I$ is:


$$
I = \sum_{i} I_{i} = G_{0}MV = G V
$$
We define $M$ as the number of sub-bands crossed by $\mu$

![[voltage conductance.png|400]]

Since in real devices the electrodes are not ideal, the transmission coefficient is not unitary, and thus 

$$
\displaylines{
I = GV \\
G(V) = G_0 \sum_{n}^{M} T_{n}(V) 
}
$$

$T$ depends on the the applied voltage and on the structure of the channel, it can be calculated only with simulations.
