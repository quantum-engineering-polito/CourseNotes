---
nextnote: "[[Flying Electron Qubit]]"
author: BabelDev0
authorlink: https://github.com/BabelDev0
---
The Aharonov–Bohm effect is a quantum-mechanical phenomenon in which an electrically charged particle is affected by an electromagnetic potential $A$ despite being confined to a region in which both the magnetic field $B$ and the $E$ and electric field are zero. The most commonly described case, sometimes called the Aharonov–Bohm solenoid effect, takes place when the wave function of a charged particle passing around a long solenoid experiences a phase shift as a result of the enclosed magnetic field, despite the magnetic field being negligible in the region through which the particle passes. 

The AB effect shows also that $A$ is not strictly related to $B$, and that is not only a mathematical trick to solve Schrödinger equation in a simpler way but a physical quantity.

# Aharonov–Bohm solenoid effect

A solenoid generates a magnetic field only in the inner part of the loop, thus in the ring arms (in grey) there is no $B$. Since $A$ is not unique with respect to $B$, we need to select a suitable $A$ for our problem and we use the Coulomb gauge:

$$ 
\nabla \cdot A = 0
$$

We notice that any close line of $A$ that includes the inner solenoid spans an area that includes the entire magnetic flux $\Phi_M$. 

![[aharonov bohm.svg|400]]


Thus since we know that $B = \nabla \times A$ we can write that :

$$ 
\int_{\Sigma} B \, d\hat{S} = \int_{\Sigma} (\nabla \times A) \ \, d\hat{S} = \Phi_{M}  
$$ 
and for Stokes theorem we have also that:

$$ 
\Phi_{M} = \int_{\Sigma} (\nabla \times A) \ \, d\hat{S} = \oint A\  dl  
$$ 
From these relationships, we can get the information that there are regions in space where the value of $B$ is zero while the value of $A$ is not. To show this, we can examine the following two cases:

First case ($r<a$)

![[rminsolenoid.svg|200]]

$$ 
\displaylines{
\oint A\  dl  = \int_{\Sigma} B \, d\hat{S} 
\\ \Downarrow \\
2\pi rA(x) = \pi r^{2}B
\\ \Downarrow \\
A(x)= \frac{1}{2}Br
}
$$ 

Second case ($r > a$):

![[rmaxsolenoid.svg|200]]

$$ 
\displaylines{
\oint A\  dl  = \int_{\Sigma} B \, d\hat{S} 
\\ \Downarrow \\
2\pi rA(x) = \pi a^{2}B
\\ \Downarrow \\
A(x)= \frac{a^{2}}{2r}B
}
$$

we can plot $A$ versus $r$ and it becomes evident that there are regions in space where the value of $B$ is zero while the value of $A$ is not:

![[Aversusr.svg|400]]

# Schrödinger equation of the system

We start from the general Schrödinger equation like in the case of the Quantum Hall effect :

$$
\left\{\frac{1}{2m}[\hat{p}-q \vec{A}(\vec{R},t)]^{2}+\cancel{ q\phi(\vec{R},t) }\right\}\psi(\vec{R},t)=-i\hbar\frac{\partial}{\partial t}\,\psi(\vec{R},t) \tag{1}
$$

But this time instead of replacing $\vec{A}$ with the form given by gauge we use a **gauge transformation** that is a modification of the wave functions and potentials in a way that leaves the physical predictions of the theory unchanged

$$ 
\Psi = \Psi' e^{ig} \qquad g(\bar{r}) = \frac{q}{\hbar}\int_{\bar{r}_{0}}^{\bar{r}} A(\bar{r}') \, d\bar{r}' 
$$ 
This changes the Schrödinger equation but not the physical predictions (expected values). 

Let’s see how such a transformation can simplify the mathematical form of the Schrödinger equation

![[Transport - page 2 1.png]]

Substituting in the Schrödinger equation:

![[free_particle_SE.png|500]]

the new equation is the Schrödinger equation of the free particle is much simpler than the previous one. 

As we have seen, the effect of $A$ is to **change the phase of the wave function**

$$ 
\Psi = \Psi' \exp \left[   i \frac{q}{\hbar}\int_{\bar{r}_{0}}^{\bar{r}} A(\bar{r}') \, d\bar{r}' \right]
$$

We recognize that the total phase of a wave function is given by

$$ 
\phi = \phi^{0} - \frac{q}{\hbar}\int_{\bar{r}_{0}}^{\bar{r}} A(\bar{r}') \, d\bar{r}'
$$

1. **The Magnetic Vector Potential Contribution**: This term represents the phase shift acquired by a charged particle due to the presence of a magnetic vector potential. This integral is evaluated along the path of the particle from an initial point $r_0$​ to a final point $r$. This term is responsible for the Aharonov-Bohm effect, where the particle acquires an additional phase in regions where the magnetic field is zero but the vector potential is non-zero.

2. **The Initial Phase ($\phi_0$)**: This term represents the initial phase of the wave function at the starting point of the path. It's essentially the phase the wave function would have in the absence of the vector potential $A$.

# Reflected and transmitted waves

We can treat the ring as a barrier problem with propagating, reflected and transmitted waves

![[AE_barrier.png|500]]

we have incoming waves with an amplitude of $1$, a reflected wave with an amplitude of $r$, and a transmitted wave with an amplitude of $t$. The transmitted amplitudes of the two paths are combined as follows:

$$ 
t = t_{1}+t_{2}
$$ 
It's important to note that in general, the amplitudes ($r$, $t$) are complex quantities, and they can be expressed as:

$$ 
\displaylines{
t_{1} = |t_{1}| e^{i\phi_{1}}
\\\\
t_{2} = |t_{2}| e^{i\phi_{2}}
}
$$

the total transmission probability is given by:

$$ 
\displaylines{
T = |t|^{2}= |t_{1} + t_{2}|^{2}
\\\\
= |t_{1}|^{2}+|t_{2}|^{2}+t_{1}^{*}t_{1}+t_{2}^{*}t_{2}
\\\\
= \underbrace{|t_{1}|^{2}+|t_{2}|^{2}}_{\text{Classical terms}}+\underbrace{2 |t_{1}t_{2}|\cos(\phi_{1}-\phi_{2})}_{\text{Quantum term (phase dependent)}}
}
$$ 
Depending on the path taken, the electron $k$ and $A$ will be either parallel or antiparallel

![[AE_paths.png|400]]

We use the new definition of the phase that includes $A$ to find the phase difference between path 1 and 2 from the fixed reference point $r_0$ to a position past the ring $r$

$$ 
\displaylines{
\phi_{1} = \phi_{1}^{0} - \frac{e}{\hbar}\underbrace{\int_{\bar{r}_{0}}^{\bar{r}} A(\bar{r}') \, d\bar{r}'}_{\text{path 1}}
\\\\
\phi_{2} = \phi_{2}^{0} - \frac{e}{\hbar}\underbrace{\int_{\bar{r}_{0}}^{\bar{r}} A(\bar{r}') \, d\bar{r}'}_{\text{path 2}}
}

$$

The sign of this term is determined by the sign of the charge of the particle.
We notice that the sum of the two paths is the loop integral that we know being equal to the flux:

$$ 
\underbrace{\int_{\bar{r}_{0}}^{\bar{r}} A(\bar{r}') \, d\bar{r}'}_{\text{path 2}} -\underbrace{\int_{\bar{r}_{0}}^{\bar{r}} A(\bar{r}') \, d\bar{r}'}_{\text{path 1}} = \oint_{r_{0}}^{r_{0}} A \cdot d\bar{l} = \Phi_{M}
$$ 
The sign of the term related to the path 1 is due to the fact that $A$ has opposite direction along the two path. Finally the total phase difference between the two paths, taking into account the effect of the vector potential, can be expressed as the difference in the initial phases plus a term dependent on the magnetic flux $\Phi_M$​ enclosed by the paths:

$$ 
\phi_{1}-\phi_{2} = \phi_{1}^{0}-\phi_{2}^{0} + \frac{e}{\hbar}\oint_{r_{0}}^{r_{0}} A \cdot d\bar{l}
$$

The phase difference between the wave functions of electrons taking two different paths around the magnetic flux is a function of the enclosed magnetic flux, even if there is no magnetic field present in the region where the electrons are traveling (because we are outside the solenoid). The interference pattern resulting from the two electron paths can be constructive, destructive, or somewhere in between, depending on the phase difference. The constructive interference amplifies the signal, and the destructive interference diminishes it.


![[conductance_AE.png|550]]

The image shows an oscillatory pattern in the measurement of the conductance ($G$) as a function of the magnetic field strength. The oscillations in conductance are a direct result of the phase differences caused by the Aharonov-Bohm effect.