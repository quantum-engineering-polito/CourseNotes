---
nextnote: 
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
To study how light interacts with matter we can, as a first approximation, think about a **dampened harmonic oscillator** that evolves according to the following second order differential equation 

$$
\frac{d^{2}x}{dt^{2}} - \mu  \frac{dx}{dt} + x = 0
$$

where $x$ is the displacement of the oscillator with respect to the rest position.

The idea of the Lorentz model is to model the electronic cloud as a mass attached to the nucleus by a spring.

When no external electrostatic field is applied, the distribution of electrons is centered around the nucleus and thus there is no **electric dipole moment** ($p = 0$) as visible in the images below.

![[no EF.png|400]]

As soon as we apply a varying electric field $\vec{\mathcal{E}}_\text{EMW}$ the electron cloud feels a force $\vec{F}_\text{EMW}$ associated to the field and a **restoring force** $\vec{F}_A$ due to the attraction to the nucleus (which has a much bigger mass compared to the one of the electron). We also have a **friction force** $\vec{F}_d$ proportional to the velocity of the electrons. In this case we have a net dipole moment due to the fact that the electron cloud is not centered anymore around the nucleus.

![[EMF applied.png|300]]

![[wave.gif|200]]

In case of a single electron we can write the following equation to describe its motion around the rest position: 

$$
\displaylines{
F_\text{EMW} + F_A + F_d = m \frac{d^{2}x}{dt^{2}}\\
\Downarrow \\
-\frac{e}{m} \mathcal{E}_\text{EMW} - \frac{\tilde{k}}{m}x - \gamma \frac{ dx}{dt} = \frac{d^{2}x}{dt^{2}}
}
$$

where $x$ is the position relative to the rest position (i.e. the nucleus), $\tilde{k}$ is the **elastic constant** of the restoring force and $\gamma$ is the **damping constant** due to dissipation.

The **resonant frequency** is given by 

$$
\omega_0 = \sqrt{ \frac{\tilde{k}}{m} }
$$





![[resonance.gif|200]]

*[Source of the animations](https://www.youtube.com/watch?v=PYRIpT-zNYI)*
