---
nextnote: 
author: BabelDev0
authorlink: https://github.com/BabelDev0
---
# Basic properties of superconductors

## Perfect conductivity

The electrical resistance of a superconductor undergoes a complete disappearance when the material is cooled below a critical temperature $T_{}c$ , which is characteristic of the material. Usually, very pure samples exhibit a very sharp transition; impure or “dirty” samples (short mean free path) show a broadened transition.

![[pure_vs_unpure_sc.png|400]]

Resistivity is never really equals to 0 but is $\rho\leq 10^{-23} \ohm cm$.

## Perfect diamagnetism (Meissner effect)

**The Meissner effect shows that superconductivity is more than just perfect conductivity**

Both superconductors and perfect conductors react to the application of an external magnetic field by screening it via dissipationless eddy currents within a thin surface layer at their surface.

>[!Note]
>**Eddy Currents**: The mechanism for this screening in both types of materials involves what are known as eddy currents. Eddy currents are loops of electric current induced within conductors by a changing magnetic field in the conductor, according to Faraday's law of electromagnetic induction. These currents create their own magnetic field, which opposes the external field.
>
>**Dissipationless Currents**: In both superconductors and perfect conductors, these eddy currents are dissipationless. In regular conductors, eddy currents lose energy over time due to the resistance in the material (this is why transformers heat up, for example). However, in perfect conductors and superconductors, these currents can flow without energy loss. In perfect conductors, this is a theoretical idealization; in superconductors, this is due to the material's unique quantum mechanical properties.

There are however differences between the two type of conductors:

**Perfect conductors** only conserve the magnetic flux inside them. Their magnetic state depends on their cooling history. A perfect conductor will expel a magnetic field only if it is applied after it has been cooled below $T_c$

![[perfect_conductor.png|300]]

**Superconductors** always expel the magnetic flux as long as the magnetic field is not large enough to destroy the superconducting state. A magnetic field will be expelled as the sample is cooled through $T_c$ even if it was applied in the normal state.

![[super_conductors.png|300]]

The diamagnetism is perfect only for bulk samples, since the magnetic field does penetrate a finite distance $\lambda$ from the surface (called the penetration depth), which typically extends for few tens of nanometers.

## Critical magnetic field(s) and critical current density

The Meissner effect further implies that superconductivity is destroyed by a critical magnetic field $H_c$. This critical magnetic field is related to the condensation energy:

**Normal State Energy**: In the normal state, the electrons in a material behave as independent particles, scattering off impurities and lattice vibrations (phonons), which leads to electrical resistance.

**Superconducting State Energy**: In the superconducting state, electrons pair up into Cooper pairs. These pairs are bound together by lattice vibrations and move through the lattice without scattering, leading to zero electrical resistance. The formation of Cooper pairs lowers the overall energy of the electron system.

**Energy Difference**: The condensation energy is essentially the difference in the free energy of the material between these two states (normal state and superconducting state) at absolute zero temperature. This energy difference is crucial because it determines the stability of the superconducting state and influences various properties of superconductors, including critical magnetic fields and critical currents

![[Supercon.png]]

In type I superconductors (usually pure simple elements) the transition from the Meissner to the normal state is abrupt, we get out of the state of superconductivity give that we raise the temperature too high or apply too strong a magnetic field. 

In type II superconductors (usually alloys or multi-atomic compounds) two distinct critical magnetic fields exist which separate the Meissner state from the normal state via an intermediate mixed state where a partial penetration of the magnetic field occurs in the so-called vortex lattice, is called in this manner because in this scenario some magnetic filed vortices are created where the magnetic flux is not 0.

![[sc_type_2.png|400]]

Since exists a field that is able to destroy the superconducting state ($H_c$), as a consequence, there is also a critical transport current density $J_c$ that will induce this critical field at the surface and drive the superconductor into the normal state.

## Energy gap

**Should not be confused with the energy gap of semiconductors**

The band gap in superconductors refers to an energy gap that safeguards the stable, condensed state of Cooper pairs in the superconducting phase, preventing the transition back to the normal state. This energy gap acts as a protective barrier for the Cooper pairs. It requires a certain amount of energy to break these pairs apart and push the electrons into higher energy states. As long as the energy available (such as thermal energy) is less than this gap, the Cooper pairs remain intact, and the material stays in its superconducting state.

![[sc_gap.png|400]]

“Super” charge carriers (and supercurrents) exist only for excitation energies below the energy gap; above them they break into standard electronic quasiparticles.

>[!Note]
>the DOS shown are the desity of state of electronic quasiparticles, not of the cooper pairs. Indeed the cooper pairs are all condensed at the chemical potential.

# Macroscopic Quantum Model (MQM)

**Superconductivity is an inherently quantum mechanical phenomenon that manifests itself over macroscopic scales.**

There exists a macroscopic quantum wavefunction $\Psi(r,t)$ that describes the behavior of the entire ensemble of superelectrons in the superconductor.

This approach doesn't delve into the detailed microscopic origins of superconductivity, much like the classical model. However, it emphasizes the crucial aspect that superconductivity is a phenomenon of coherence among all superelectrons. This concept is similar to the quantum understanding of electromagnetism. In electromagnetism, while individual photons are considered quantum particles of light, a large group of photons exhibiting coherent behavior (like in a laser) can be effectively represented by a single electromagnetic field.
## London equations

Starting form the Schrödinger equation for a charged particle in electric and magnetic fields we can get :

$$
\boldsymbol{J}_s(\boldsymbol{r}, t)=q n_s(\boldsymbol{r}, t) \frac{\hbar}{m}\left(\nabla \theta(\boldsymbol{r}, t)-\frac{q}{\hbar} \boldsymbol{A}(\boldsymbol{r}, t)\right)
$$

that is the most general form for the supercurrent in an isotropic superconductor, since it includes the possibility that the local supercarrier density is variable in both space and time. In many practical situations and devices, however, it is appropriate to consider a constant and approximately uniform density of supercarriers, in this case:

$$
\displaylines{
\Lambda\boldsymbol{J}_s(\boldsymbol{r}, t)=\frac{\hbar}{q} \nabla \theta(\boldsymbol{r}, t)-\boldsymbol{A}(\boldsymbol{r}, t)
\\\\
\Lambda = \frac{m}{q^{2}n_{s}} \quad \text{london coefficent}
}
$$

Taking the curl of this form of the supercurrent equation we get the **2nd London Equation** that describes perfect diamagnetism (Meissner effect) and describe the response of a superconductor to a magnetic field:

$$
\nabla \times (\Lambda J_{s}(r,t)) = -B(r,t)
$$

combining this Eq. with the 4th Maxwell equation in the first case and taking the curl of the 2nd London Equation in the second we get:

$$
\begin{align}
& -\nabla^{2}B =- \frac{B}{\lambda^{2}} \quad \lambda=\sqrt{ \frac{\Lambda}{\mu_{0}} } && \tag{1}
\\\\
& -\nabla^{2}J_{s} =- \frac{J_{s}}{\lambda^{2}} \tag{2}
\end{align}
$$

**Thus any magnetic field is exponentially screened by an induced supercurrent, and both are confined to a surface layer of thickness $\sim \lambda$**

from the Schrödinger we can also derive:

$$
\frac{\partial}{\partial t} \boldsymbol{J}_s(\boldsymbol{r}, t)=\frac{\boldsymbol{E}(\boldsymbol{r}, t)}{\Lambda}-\frac{1}{2 q n_s} \nabla J_s^2(\boldsymbol{r}, t)
$$

that is the 1st London equation, that describe the response of a superconductor to an electric field. We can notice not only the exponential increase in supercurrent under the application of an electrostatic field due to the absence of dissipation, but also an additional term proportional to the gradient of kinetic energy of the superelectrons.

## Fluxoid quantization

Fluxoid quantization is the most basic property of a superconductor that cannot be described in terms of classical models and requires a full quantum mechanical treatment

$$
\oint_C \Lambda \mathbf{J}_s(\mathbf{r}, t) \cdot d\mathbf{l} + \int_S \mathbf{B} \cdot d\mathbf{s} = n\Phi_0
$$

The integral of the supercurrent times a constant $\Lambda$ around the closed contour $C$, plus the integral of the magnetic field $B$ over the surface $S$, equals an integer $n$ times the magnetic flux quantum $\Phi_{0}$​. This shows that the total magnetic flux, which includes contributions from both external magnetic fields and the supercurrents induced within the superconductor, is quantized.

Let's derive it:
Consider the supercurrent of a homogeneous isotropic superconductor:

$$
\Lambda J_{s} = \frac{\hbar}{q} \nabla \theta-A
$$

Integrating the Eq. over a contour C that enclosed a surface S we get

$$
\oint_C \Lambda \mathbf{J}_s(\mathbf{r}, t) \cdot d\mathbf{l} =
\frac{\hbar}{q}\oint_C \nabla \theta d\mathbf{l}-\oint_C A d\mathbf{l}
$$

applying Stokes’s theorem:

$$
\oint_C A d\mathbf{l} = \int_s (\nabla \times A) d\mathbf{s} = \int_s B  d\mathbf{s}   
$$

thus we can write:

$$
\oint_C \Lambda \mathbf{J}_s(\mathbf{r}, t) \cdot d\mathbf{l} + \int_s B  d\mathbf{s}   =
\frac{\hbar}{q}\oint_C \nabla \theta d\mathbf{l}
$$

now recalling that the line integral of the gradient of any scalar function is the difference between the same function evaluated in the start and end-points we get:

$$
\frac{\hbar}{q}\oint_C \nabla \theta d\mathbf{l} = \Delta \theta
$$
Now, the phase of the wavefunction in a superconductor must be coherent, meaning it is uniform throughout the material. However, the phase itself is not a directly measurable quantity and can change by multiples of $2π$ without any physical effects. This is because a full rotation of $2π$ brings the wave back to its original state, so adding multiples of $2π$ doesn't change the wave's observable properties.

thus we call the integral of the current and the magnetic field across a closed loop inside the superconductor, the "**fluxoid**" and this is linked with the phase difference by:

$$
\oint_C \Lambda \mathbf{J}_s(\mathbf{r}, t) \cdot d\mathbf{l} + \int_S \mathbf{B} \cdot d\mathbf{s} = n\Phi_0
$$

where $\Phi_0 = \frac{\hbar}{q}2\pi$ is the magnetic flux quantum.

this relation holds for any shape of the closed contour C:

**Simply-Connected Region**: This is a continuous area without any holes. if you have a loop $C$ that encloses a simply-connected region, you can shrink that loop down to a single point without encountering any barriers or without having to "break" the superconductor. When you do this, you find that both the supercurrent and the magnetic field inside this loop are zero. son $n = 0$

**Multiply-Connected Region**: This is an area with at least one hole in it (like a doughnut). In this case, if you have a loop $C$ that goes around the hole, you cannot shrink it down to a point without "breaking" the superconductor. For a multiply-connected region, the integral of the supercurrent around loop $C$ and the magnetic field through the surface $S$ enclosed by $C$ will not be zero. The total amount of flux (including both those generated by external fields and internal induced supercurrents) passing through a multiply-connected superconductor must be a discrete number of fundamental flux quanta.

### Experiments

Fluxoid quantization can be directly probed by flux trapping experiments.

![[experiment_fluxoid.png]]