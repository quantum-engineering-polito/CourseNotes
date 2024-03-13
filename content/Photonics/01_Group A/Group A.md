---
nextnote: 
author: Giacomo
authorlink: https://github.com/gamberoillecito
---
# Electromagnetic fields

Electromagnetic vectorial fields are the mediators of the interaction between charged material objects, between currents, between currents and charged materials objects in contrast with the “action at distance” view that precedes the field theory.

We identify two fields: 

$$
\begin{align}
&\text{Electric field:} &&  \vec{\mathcal{E}} && [\text{V} / \text{m}]\\
&\text{Magnetic field:} &&  \vec{B} && [\text{T}]
\end{align}
$$

In case we have a dielectric and magnetic medium, the associated fields become: 

$$
\begin{align}
\text{Electric displacement:} && \vec{D} = \varepsilon_0 \vec{\mathcal{E}} + P && [\text{C m}^{-2}]  \\
\text{Magnetic field:} && \vec{H} = \frac{1}{\mu_0} \vec{B} - \vec{M} && [\text{A m}^{-1}]
\end{align}
$$

$\vec{P}$ is the **electric polarization**, which is defined as the **electric moment per unit volume**.

The constant $\mu_0$ is the **magnetic permeability of the vacuum** and $\vec{M}$ is the **magnetization of the medium**, which is defined as the magnetic moment per unit volume.

## Linear, homogenous, isotropic medium

>[!info]
> **Homogeneous** means that $\chi$ does not depend on the position
> **Isotropic** means that $\chi$ is a scalar
> **Linear** means that $\chi$ is independent on $E$
> **Instantaneous** means that the response of the medium to the electric field excitation follows instantaneously the excitation

In a **linear, homogenous, isotropic** medium the microscopic dipoles align along the direction of the applied electric field, so that we can write: 

$$
\begin{align}
\vec{P} = \varepsilon_0 \chi \vec{\mathcal{E}}  \\
\vec{D} = \varepsilon_0 \varepsilon_{r} \vec{\mathcal{E}}
\end{align}
$$

where 

- $\varepsilon_0$ is the **electric permittivity** of the vacuum
- $\chi$ is the **electric susceptibility**
- $\varepsilon_{r} = 1 + \chi$ is the **relative dielectric permittivity** of the medium

We can also find a simple expression for the magnetization of the medium $\vec{M} = \chi_{M}\vec{H}$. This formula, together with the definition of magnetic field, gives us 

$$
\begin{align}
\vec{B} &= \mu_0 (\vec{H} + \vec{M}) \\
 &= \mu_0 (1 + \chi_{M}) \vec{H}  \\
&= \mu_0 \mu_{r} \vec{H}
\end{align}
$$

where $\mu_{r} = 1 + \chi_{M}$ is the **relative magnetic permeability** of the medium.

>[!warning] We will always assume $\chi_{M} = 0$ unless otherwise specified
>This is due to the fact that the magnetic dipoles are too slow to respond

# Maxwell's equations



$$

\begin{align}
&\vec{\nabla} \cdot \vec{D} = \varrho \tag{ME 1}\\
&\vec{\nabla} \cdot \vec{B} = 0 \tag{ME 2} \\
&\vec{\nabla} \times df   = -\frac{ \partial \vec{B} }{ \partial t }  \tag{ME 3} \\
& \vec{\nabla} \times \vec{H} = \vec{j} + \frac{ \partial \vec{D} }{ \partial t } \tag{ME 4}
\end{align}

$$

where $\varrho$ is the **free charge density** and $\vec{j}$ is the **free current density**.

1) is the **Gauss' law** of electrostatics
2) is the **Gauss' law** for magnetostatics (with the assumption of no magnetic monopoles)
3) is the **Faraday and Lenz** law of magnetic induction
4) is the **Ampere and Maxwell** law

# Electromagnetic waves

