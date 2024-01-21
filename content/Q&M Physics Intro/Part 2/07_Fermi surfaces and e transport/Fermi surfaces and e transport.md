---
nextnote: "[[Semiconductors]]"
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
# Fermi surfaces

The Fermi surface is the surface of constant energy $E_F$ in $k$ space. It separates the filled orbitals with the unfilled ones at $T = 0K$.

#todo

# Current transport in solids

#todo add drawing

The current density is given by

$$
J = i/A = dq/dt \cdot 1/A
$$

If $n$ is the electron density, then $dq = -ne \cdot d\mathbf{V} = -A v ne \cdot dt$ where $v = dx/dt$ is the velocity of the electrons.

From the relation above we can write $dq/dt = -A v ne$ and substitute this in the formula for the current density, getting: 

$$
J = \frac{1}{A} (-Avne) = - nev
$$

or, in vector format 

$$
\boxed{\vec{J} = -ne\vec{v}}
$$

## Electrical conductivity for free electrons


> [!quote] Kittel, Chapter 6, "ELECTRICAL CONDUCTIVITY AND OHM’S LAW"

In the case of a free electron 

$$
\vec{F} = m \frac{d\vec{v}}{dt}  = \frac{d\vec{p}}{dt} = \hbar \frac{d\vec{k}}{dt} = - e \left( \vec{\varepsilon} + \cancel{ \frac{1}{c} \vec{v} \times \vec{B} } \right)
$$
If we ignore the effect of the magnetic field ($B = 0$) we can derive 

$$
\hbar \frac{d\vec{k}}{dt} = - e \vec{\varepsilon}
$$
which, integrating over $t$ we get 

$$
\Delta \vec{k} = \vec{k}(t) - \vec{k}(0) = - \frac{e\vec{\varepsilon}}{\hbar}t
$$

If at $t = 0$ (before any force is applied), the electrons occupy the states inside the Fermi sphere cantered at $k = 0$, when the force is applied the sphere will move as a whole (the force increases the momentum of all the electrons in the same way).

![[fermi spheres.png|500]]

Since the electrons will collide with impurities, lattice imperfections and phonons, their momentum will not grow indefinitely. 

If we call $\tau$ the **mean collision time**, we can write 

$$
\Delta \vec{k} = -\frac{\vec{\epsilon}}{\hbar} \tau
$$

which represents how much the sphere is translated when the force is applied (picture above on the right).

The incremental velocity of the electrons can thus be written as 

$$
\delta \vec{v} = \frac{\vec{p}}{m} = \hbar \frac{\Delta \vec{k}}{m} = - \frac{\vec{e \varepsilon}}{m} \tau
$$

So, going back to the current density $J$, if we are in a constant electric field $\varepsilon$, we have 

$$
\boxed{\vec{J} = nq \Delta \vec{v} = \frac{n e^{2} \tau}{m} \vec{\varepsilon} = \sigma \vec{\varepsilon}}
$$
which is  **Ohm's law**.

The electrical conductivity $\sigma$
$$
\boxed{ \sigma = \frac{ne^{2}\tau}{m} }
$$

can be understood intuitively considering the following things: 

- We expect the charge transported to be proportional to the charge density $ne$.
- The factor $e/m$ is given by the fact that the acceleration in a given electric field is proportional to $e$ and inversely proportional to $m$. 
- The time $\tau$ describes the free time during which the field acts on the carrier.

### Semiclassical description

For a more accurate description we would need to solve the the time dependent SE (which is complex to do). So we describe the electrons as wavepackets: linear combination of plane waves with a wave vector in the interval $\left[ k- \frac{\Delta k}{2}; k + \frac{\Delta k}{2} \right]$ 

$$
\Psi(x,t) \simeq \int_{k - \frac{\Delta k}{2}}^{k + \frac{\Delta k}{2}} a(k) e^{ i (k_{x} - w(k)t)} \, dk
$$

where $w$ is the **dispersion relation**.

The mean motion of the wavepacket is given by the **group velocity** 

$$
v = \frac{ \partial w }{ \partial k } 
$$

Since we are in a crystal, the wavepacket is formed by the combination of Bloch states (called Wannier functions). The electrons velocity will be given by the group velocity of the Bloch wavepackets ( #todo why is this true?): 

$$
\vec{v} = \nabla_{\vec{k}} w(\vec{k}) = \frac{1}{\hbar}\nabla_{\vec{k}} E (\vec{k})
$$

In this case $\vec{k}$ is a sort of mean wave vector that characterises the wavepacket.

If we now want ( #todo why should we want to) to calculate the acceleration along the i-th direction we get 

$$
\frac{dv_{i}}{dt} = \frac{1}{\hbar} \frac{d}{dt}(\nabla_{\vec{k}}E(\vec{k})) = \frac{1}{\hbar} \frac{d}{dt}\left( \frac{dE(\vec{k})}{dk_{i}} \right) \tag{1}
$$

We can rewrite 

$$
\frac{d}{dt} = \frac{d}{d\vec{k}} \frac{d\vec{k}}{dt} = \sum_{j} \frac{d}{dk_{j}} \frac{dk_{j}}{dt}
$$

By substituting this in $(1)$ we get 

$$
\begin{align}
\frac{dv_{i}}{dt} &= \frac{1}{\hbar} \left(\sum_{j} \frac{d}{dk_{j}} \frac{dk_{j}}{dt}\right) \frac{dE(\vec{k})}{dk_{i}} \overset{ \substack{ dk_{j}/dt = e \varepsilon_{j}/\hbar \\ \downarrow  }}{ = } \\
&= \frac{1}{\hbar} \sum_{j} \frac{ \partial^{2} E(\vec{k}) }{ \partial k_{j} \partial k_{i}} \left( - \frac{e ~\varepsilon_{j}}{\hbar} \right)
\end{align} 
$$

Finally, we get 

$$
\underbrace{ \frac{dv_{i}}{dt} }_{ a_{i} } = \underbrace{ \frac{1}{\hbar^{2}} \sum_{j} \frac{ \partial^{2} E(\vec{k}) }{ \partial k_{j} \partial k_{i}} }_{ 1/m^{*} } \underbrace{ ( -e ~\varepsilon_{j}) }_{ F_{j} }
$$

#### Effective mass tensor

$$
\left(\frac{1}{m^{*}}\right)_{ij} = \frac{1}{\hbar^{2}} \frac{ \partial^{2} E(\vec{k}) }{ \partial k_{j} \partial k_{i} } 
$$

When the effective mass doesn't change depending on the direction, it can be written as 

$$
m^{*} = \frac{\hbar^{2}}{d^{2}E/dk^{2}}
$$

which shows that the effective mass is related to the **curvature of the dispersion relation**.

#todo improve plot

![[effective mass and dispertion bianco.png]]

## Current inside an energy band

### Full band

The electron density associated with a volume $dk$ centred around $k$ is 

$$
n = 2 \frac{dk}{8 \pi^{3}/\mathbf{V}} \cdot \frac{1}{\mathbf{V}}
$$

and the current density is 

$$
\begin{align}
d\vec{J} &= -en\vec{v} \\
&= - e \cdot 2 \frac{dk}{8\pi^{3}} \cdot \frac{1}{\hbar} \nabla _{\vec{k}} E(\vec{k}) \\
 &= - \frac{2e}{8 \pi^{3} \hbar} \nabla_{\vec{k}} E (\vec{k})dk
\end{align}
$$

To evaluate the total current density we need to integrate on the 1st BZ: 

$$
\vec{J} = - \frac{2e}{8\pi^{3}\hbar}\int _{BZ} \nabla_{\vec{k}} E(\vec{k}) \, d\vec{k} 
$$

Since $E(\vec{k})$ is a **periodic** and **even** function, $\nabla_{\vec{k}} E(\vec{k})$ will be a **periodic** and odd **function**. This means that its integral over the BZ is **null**.

$$
\boxed{ \vec{J}(\text{full band}) = 0 }
$$

#todo page 22 bianco: why calculating the velocity

### Partially filled band

In case the band is not full, the electric field can change the electron's momentum, which means that the distribution of $k$s around $k = 0$ is not symmetric anymore.

In this case 

$$
d\vec{J} = -e ~ \vec{v} ~ n \qquad n = -2 e \frac{dk}{8\pi^{3}} \vec{v}(\vec{k})
$$

Similarly to before, $\vec{J}$ can be calculated by integrating, in this case only over the occupied states ($\vec{k}\text{ occ.}$)

$$
\begin{align}
\vec{J} &=-\frac{2e}{8\pi^{3}} \int _{\vec{k} \text{ occ.}}  \vec{v}(\vec{k})\, d\vec{k} \\
&= - \frac{2e}{8\pi^{3}} \int _{\vec{k} \text{ occ.}} \nabla_{\vec{k}} E(\vec{k})\, d\vec{k}  \\
&= - \cancelto{ 0 }{ \frac{2e}{8\pi^{3}} \int _{{\color{red} \text{BZ}} } \nabla_{\vec{k}} E(\vec{k})\, d\vec{k}K }  - \left[- \frac{2e}{8\pi^{3}} \int _{{\color{red} \vec{k} \text{ empy}} } \nabla_{\vec{k}} E(\vec{k})\, d\vec{k} \right] \\
&= {\color{red} +} \frac{2e}{8\pi^{3}} \int _{\vec{k} \text{ empty}}\vec{v}(\vec{k}) \, d\vec{k}  \\
&= {\color{red} +} \frac{2e}{8\pi^{3}} \int _{\vec{k} \text{ empty}}\nabla_{\vec{k}} E(\vec{k}) \, d\vec{k} 
\end{align}
$$

This means that the current density in a partially filled band can be seen as if it was due to **positive** charges (holes) in the band.