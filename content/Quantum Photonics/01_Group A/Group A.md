---
nextnote: 
author: Giacomo, BabelDev0
authorlink: https://github.com/gamberoillecito, https://github.com/BabelDev0
---
# Electromagnetic fields

The most common description of the electromagnetic field uses two three-dimensional vector fields called the electric field $\vec{\mathcal{E}}$ and the magnetic field $\vec{B}$. These two vector fields serve as mediators in interactions among charged material objects. This formulation stands in contrast to the previous notion of "action at a distance," predating field theory, where forces seemed to act directly between objects without intermediary fields.

We identify the two fields: 

$$
\begin{align}
&\text{Electric field:} &&  \vec{\mathcal{E}} && [\text{V} / \text{m}]\\
&\text{Magnetic field:} &&  \vec{B} && [\text{T}]
\end{align}
$$

In materials that exhibit both **dielectric** and **magnetic** properties, such as ferromagnetic materials, the behavior of electromagnetic fields change. This is due to the interaction of the electromagnetic field with the intrinsic properties of the material.

When an electromagnetic field propagates through such a material, it induces **polarization** and **magnetization** within the material, which contribute to the overall response of the medium to the electromagnetic field. This response is characterized by the introduction of additional fields. 

The **electric displacement field** ($\vec{D}$) and the **magnetic field intensity** ($\vec{H}$):

$$
\begin{align}
\text{Electric displacement:} && \vec{D} = \epsilon_0 \vec{\mathcal{E}} + P && [\text{C m}^{-2}]  \\
\text{Magnetic field intensity:} && \vec{H} = \frac{1}{\mu_0} \vec{B} - \vec{M} && [\text{A m}^{-1}]
\end{align}
$$

### Electric displacement field ($\vec{D}$)

In a dielectric material, the dipoles tend to align themselves opposite to the direction of the electric field. This alignment results in an overall polarization of the material, which indeed contributes to the **electric displacement field** a vector field that represents the electric flux density, take into account the electromagnetic effects of polarization and that of an external electric field, combining the two in an auxiliary field.

the $\vec{P}$ in the formula is the (macroscopic) density of the permanent and induced electric dipole moments in the material also called **electric polarization**. It is defined as the **electric moment per unit volume**. It arises due to the alignment or redistribution of bound charges within the material (creation of electric dipoles) in response to an external electric field. The polarization term contributes to the electric displacement field by introducing an additional displacement of charge within the material. 

### Magnetic field intensity ($\vec{H}$)

The constant $\mu_0$ is the **magnetic permeability of the vacuum** and $\vec{M}$ is the **magnetization of the medium**, which is defined as the magnetic moment per unit volume. In a vacuum, $\vec{B}$ and $\vec{H}$ are proportional to each other. Inside a material they are different due to $\vec{M}$.

![[Magnetic field VFPt magnets.png| 300]]

## Linear, homogenous, isotropic medium

We start defining the **electric susceptibility** $\chi$ that is a dimensionless proportionality constant that indicates the **degree of polarization** of a dielectric material in response to an applied electric field.

>[!info]
> **Homogeneous** means that the properties of the material are constant at any point (within the material). **i.e. $\chi$ does not depend on position.**
> 
> **Isotropic** means that a material has the same properties in all directions. In other words, the response of the material to an electric field is the same regardless of the direction of the field. **i.e. $\chi$ is a scalar (otherwise is a tensor)**
> 
> **Linear** means that in this materials the response is proportional to the excitation. Response of the material is directly proportional to the applied field. **i.e. $\chi$ is independet on $\vec{\mathcal{E}}$**
> 
> **Instantaneous** means that the response of the medium to the electric field excitation follows instantaneously the excitation

In a **linear, homogenous, isotropic** medium the microscopic dipoles align along the direction of the applied electric field, so that we can write: 

$$
\begin{align}
\vec{P} = \epsilon_0 \chi \vec{\mathcal{E}}  \\
\vec{D} = \epsilon_0 \epsilon_{r} \vec{\mathcal{E}}
\end{align}
$$

where 

- $\epsilon_0$ is the **electric permittivity** of the vacuum
- $\chi$ is the **electric susceptibility**
- $\epsilon_{r} = 1 + \chi$ is the **relative dielectric permittivity** of the medium

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
>This is due to the fact that the magnetic dipoles are too slow to respond.
> #todo  $|\chi_{M}|\sim 10^{-5}$ not too slow but weak, ask to prof?

# Maxwell's equations



$$

\begin{align}
&\vec{\nabla} \cdot \vec{D} = \varrho \tag{ME 1}\\
&\vec{\nabla} \cdot \vec{B} = 0 \tag{ME 2} \\
&\vec{\nabla} \times \vec{\mathcal{E}}   = -\frac{ \partial \vec{B} }{ \partial t }  \tag{ME 3} \\
& \vec{\nabla} \times \vec{H} = \vec{j} + \frac{ \partial \vec{D} }{ \partial t } \tag{ME 4}
\end{align}

$$

where $\varrho$ is the **free charge density** and $\vec{j}$ is the **free current density**.

1) is the **Gauss' law** of electrostatics
2) is the **Gauss' law** for magnetostatics (with the assumption of no magnetic monopoles)
3) is the **Faraday and Lenz** law of magnetic induction
4) is the **Ampere and Maxwell** law

>[!note] Quantization of EM radiation cannot be described by the MEs

# Electromagnetic waves

The Maxwell's equations are 4 partial differential equation, and is possible to find a wave-like solution for the $\vec{\mathcal{E}}$ and $\vec{B}$ considering the special case in witch we are inside a linear, isotropic, homogeneous, non magnetic material and $\varrho=0$ (no free charges).

Under these conditions we see that $\vec{B}=\mu_{0}\vec{H}$ and that $\vec{D}=\epsilon_{0}\epsilon_{r}\vec{\mathcal{E}}$ so we can substitute these into the 4th MEs and get:

$$ 
\vec{\nabla} \times \vec{B} = \mu_{0}\epsilon_{0}\epsilon_{r} \frac{ \partial \vec{\mathcal{E}} }{ \partial t } \tag{ME 4}
$$ 
taking the curl of both members of ME (3) and using the previous relations:

$$
\nabla \times (\nabla \times \vec{\mathcal{E}}) = -\mu_{0}\epsilon_{0}\epsilon_{r} \frac{ \partial^{2} \vec{\mathcal{E}} }{ \partial t^{2} }
$$

now using the vector identity:

$$ 
\nabla \times (\nabla \times \vec{\mathcal{E}}) = \nabla(\cancelto{0}{\nabla \cdot \vec{\mathcal{E}}}) - \nabla^{2} \vec{\mathcal{E}}
$$ 
so we obtain this single PDE for the electric field:

$$ 
\nabla^{2} \vec{\mathcal{E}} = \mu_{0}\epsilon_{0}\epsilon_{r} \frac{ \partial^{2} \vec{\mathcal{E}} }{ \partial t^{2} } \tag{1}
$$ 
and analogously for the magnetic field:

$$ 
\nabla^{2} \vec{B} = \mu_{0}\epsilon_{0}\epsilon_{r} \frac{ \partial^{2} \vec{B} }{ \partial t^{2} } \tag{2}
$$

 in dielectric material the propagation velocity is given by:

$$ 
\frac{1}{v^{2}}=\mu_{0}\epsilon_{0}\epsilon_{r}\quad , \quad v=\frac{1}{\sqrt{ \epsilon_{r}}}c \equiv \frac{c}{n}
$$

where $n=\frac{1}{\sqrt{ \epsilon_{r} }}$ is the medium refractive index which allows us to relate the optical properties of a medium to its dielectric properties.

### The d'Alembert equation

The d'Alembert equation is a partial differential equation that describes the propagation of waves. 

It is defined as:
$$ 
\frac{{\partial^2 u}}{{\partial t^2}} = c^2 \frac{{\partial^2 u}}{{\partial x^2}}
$$ 
son in our case we can rewrite (1) and (2) using this:

$$ 
\begin{array}{ll}\frac{\partial^2 \varepsilon_x}{\partial x^2}+\frac{\partial^2 \varepsilon_x}{\partial y^2}+\frac{\partial^2 \varepsilon_x}{\partial z^2}=\frac{1}{v^2} \frac{\partial^2 \varepsilon_x}{\partial t^2} & \frac{\partial^2 B_x}{\partial x^2}+\frac{\partial^2 B_x}{\partial y^2}+\frac{\partial^2 B_x}{\partial z^2}=\frac{1}{v^2} \frac{\partial^2 B_x}{\partial t^2} \\ \frac{\partial^2 \varepsilon_y}{\partial x^2}+\frac{\partial^2 \varepsilon_y}{\partial y^2}+\frac{\partial^2 \varepsilon_y}{\partial z^2}=\frac{1}{v^2} \frac{\partial^2 \varepsilon_y}{\partial t^2} & \frac{\partial^2 B_y}{\partial x^2}+\frac{\partial^2 B_y}{\partial y^2}+\frac{\partial^2 B_y}{\partial z^2}=\frac{1}{v^2} \frac{\partial^2 B_y}{\partial t^2} \\ \frac{\partial^2 \varepsilon_z}{\partial x^2}+\frac{\partial^2 \varepsilon_z}{\partial y^2}+\frac{\partial^2 \varepsilon_z}{\partial z^2}=\frac{1}{v^2} \frac{\partial^2 \varepsilon_z}{\partial t^2} & \frac{\partial^2 B_z}{\partial x^2}+\frac{\partial^2 B_z}{\partial y^2}+\frac{\partial^2 B_z}{\partial z^2}=\frac{1}{v^2} \frac{\partial^2 B_z}{\partial t^2}\end{array}
$$

# Plane waves

Plane waves are a particular class of EMW, that is represented by those waves where $\vec{\mathcal{E}}$ and $\vec{B}$ only depends on a direction, say $z$, and on time. 

![[Plane wave 3D.svg.png|300]]

In this case from the 4 MEs directly follows that $\vec{\mathcal{E}}$ and $\vec{B}$ oscillates perpendicularly to the direction of the wave's advance so they are transverse waves ($\vec{\mathcal{E}}_{z}=0, \vec{B}_{z}=0$).

Each non null component of the electric and magnetic field must solve the 1D D’Alembert equation. In the hypothesis that these components are respectively directed along the $x$−axis and the $y$−axis we get:

$$ 
\frac{\partial^2 \varepsilon_x}{\partial z^2}=\frac{1}{v^2} \frac{\partial^2 \varepsilon_x}{\partial t^2} \quad , \quad \frac{\partial^2 B_{y}}{\partial z^2}=\frac{1}{v^2} \frac{\partial^2 B_{y}}{\partial t^2}
$$

the general solution of which is the sum of a progressive and regressive wave with the form:

$$ 
\displaylines{
&\mathcal{E}_{x} = (f_{1}(z - vt) + g_{1}(z + vt))\\\\

&B_y = (f_{2}(z - vt) - g_{2}(z + vt))
}
$$ 
where:

- $f(z-vt)$ represents a forward-traveling wave
- $g(z+vt)$ represents a backward-traveling wave.

>[!note] $\vec{\mathcal{E}}$ and $\vec{B}$  are not independent:
>
>$$
\frac{\mathcal{E}}{B}=v
>$$







