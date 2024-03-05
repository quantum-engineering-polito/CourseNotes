---
nextnote: "[[Quantum Dots]]"
author: BabelDev0
authorlink: https://github.com/BabelDev0
draft: false
---
# Conductance

Formula for the conductance in a material


$$
G = \frac{A}{L} \eta
$$
where $A$ is the cross-section $L$ is the length and $\eta$ is the material dependent conductivity.

# Balistic transport

Ballistic transport refers to the condition where electrons or other charge carriers move through a material without being scattered by impurities, defects, or lattice vibrations within that material. In typical conductive materials, electrons often collide with atoms and other electrons, which scatters them in different directions. This scattering limits the flow of current and contributes to electrical resistance. However, in ballistic transport, electrons can travel through the conductor (often a very thin or very clean wire, or a nanoscale device) at high speeds and over relatively long distances without scattering. 

**This happens when the dimensions of the material are shorter than the mean free path of the electrons, which is the average distance an electron travels between collisions.** Definition of mean free path:

$$
\lambda = v_{f}\cdot t
$$

where $v_f$ is the electron speed at Fermi level and $t$ is the average time between collisions.

# Ideal quantum wire

![[Ideal_wire.png]]

We make some assumptions to simplify the scenario and be able to arrive at the result:

- No scattering event, transport in the channel is perfectly ballistic
- The electrons entering the reservoir contacts are instantaneously in equilibrium with them.
- contacts are reflectionless the transmission probability from wire to contact is unitary
- Temperature=0
- the chemical potential of the left side its higher than the chemical potential of the right side $\mu_{L} > \mu_{R}$ so that electrons will flow to the right

Let's see the solution of the Schrödinger eq. for the wire, we already know them form [[Quantum Wire]] :

$$
\displaylines{
E = \frac{\hbar^{2}\pi^{2}n^{2}_{x}}{2ma_{x}^{2}}+
\frac{\hbar^{2}\pi^{2}n^{2}_{y}}{2ma_{y}^{2}}
+\frac{\hbar^{2}k_{z}}{2m} \implies
\\\\
E_{n,k_{z}} = \varepsilon_{n}+\frac{\hbar^{2}k_{z}}{2m}
}
$$

Now recalling the definition of the current from the classical physics:

$$
I = \frac{dQ}{dt}
$$

where the total charge in a small volume of length $dz$ is :

$$
dQ = en_{e}Adz
$$

so we can write:

$$
I = \frac{dQ}{dt} = en_{e}A \frac{d_{z}}{d_t} = en_{e}A v_{z}
$$

**The aim is write the current as function of the energy as it is what changes from left to right**. The number of electrons in the wire is:

$$
N = n_{e}AL
$$

and the current can be rewritten as:

$$
I = \frac{e}{L}Nv_{z}
$$

We want to write the current as function of the energy. We take an infinitesimal of I and write it as dependent on dE:

![[I_respect_to_E.png|600]]

In summary, we have shown that the conductance of a one-dimensional system with one occupied subband only depends on fundamental constants, namely the elementary charge e and the Planck constant h. Importantly, it does not depend on the dispersion relation E(k) or the Fermi energy EF

The ideal wire is made of multiple bands, each band contributes to the current

![[multiple_bands.png|350]]

Situation A is the previous one Situation B is the general case, to find the current energy relation in this case we need to make an approximation.

Linear response approximation: we need to prevents $\mu_{L}$ and $\mu_{R}$ to be on a different number of bands, thus we impose $\mu_{L}-\mu_{R}= ~\text{eV} \ll K_{B}T$

![[linea_response_approx.png|300]]

in this case the current $I$ is:


$$
I = \sum_{i} I_{i} = G_{0}MV
$$
We define M as the number of subbands crossed by $\mu$

















