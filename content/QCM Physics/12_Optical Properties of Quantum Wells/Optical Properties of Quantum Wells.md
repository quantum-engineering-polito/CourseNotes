---
nextnote: "[[QW Superlattice]]"
author: BabelDev0
authorlink: https://github.com/BabelDev0
draft: false
---
# Light-electron interaction

In the classical model, nuclei and electrons can be described by a spring system. 

![[spring_model.png|200]]

The electrons are held in a stable orbit with respect to the heavy nucleus by springs which represent the restoring forces due to the binding between them.
The negatively charged electron and the positively charged nucleus form an electric dipole with a magnitude proportional to their separation.

Light is characterized by a harmonically oscillating magnetic and electric field.

![[Light Prop.png|400]]

If we shine a light on an atom, the photons electric field exerts a force on the electrons and the nucleus and drives oscillations of the system at frequency $\omega$ . During the oscillations of the atomic dipole, the nucleus remains more or less stationary due to its heavy mass, while the electron oscillates backwards and forwards at its natural frequency $\omega_{0}$. 

If $\omega$ coincides with one of the natural frequencies of the atom $\omega_0$, then we have a resonance phenomenon, this is like pushing a swing at just the right times to make it go higher. At resonance, the electron absorbs energy from the light very efficiently.

The absorption strength is characterized by the absorption coefficient $\alpha$

To describe the optical transitions and the overall absorption coefficient in materials we rely on the [[Fermi golden rule|Fermi’s golden rule]] which estimates the probability per unit of time that a quantum system will transition from an initial state $\ket{i}$ to a final state $\ket{f}$ due to an external perturbation

$$
W_{fi}(\hbar\omega) = \frac{2\pi}{\hbar} |M_{fi}|^{2} \delta(E_{f} - E_{i}  - \hbar \omega)
$$

The rate is influenced by mainly two factors.

**The matrix element $M_{fi}$**:

$$
M_{fi} = \braket{ \phi_{f} | \hat{V} | \phi_{i}}
$$

Where  $\phi_{f}$ and $\phi_{i}$ are the wavefunciton of the two state, and $\hat{V}$ is the Operator of the perturbation that couples the two states.

The physical meaning of $M_{fi}$ is that it quantifies how strongly the initial and final states are coupled by the perturbation. If this value is large, the probability of transition between these states is high; if it's small, the probability is low. 

The square of the absolute value of the matrix element, $|M_{fi}|^{2}$, is proportional to the transition rate between the two states, indicating how likely it is for the transition to occur per unit of time.

**The delta function**:

$$
\delta(E_{f} - E_{i}  - \hbar \omega)
$$

This part ensures that energy is conserved during the transition. The transition can only occur if the energy of the photon ($\hbar\omega$) is equal to the energy difference between the final and initial states, so only if there is energy conservation. 

# Joint density of states

In semiconductors, light absorption creates energetic electrons and electron vacancies or holes. The optical absorption is given by the rate of all possible  transitions allowed by a given photon energy $\hbar\omega$.

$$
\displaylines{
\alpha(\hbar\omega) \propto W_{tot}(\hbar\omega)
\\\\
W_{tot}(\hbar\omega) = \frac{2\pi}{\hbar}|M|^{2}\ J(\hbar\omega)
}
$$

where $J(\hbar\omega)$ is the joint density of states. To understand the form of the joint density of states lets review first the form of the general density of states for a system with a discrete set of energy levels

$$
D(E) = \frac{1}{V} \sum_{i=1}^{N} \delta(E - E(k_i)).
$$

In the limit of a large system (where $L \rightarrow \infty$), the spacing between the allowed momentum states $k$ becomes infinitesimally small, and the sum over discrete states turns into an integral over a continuous range of states.

$$
D(E) = \int_{\text{states}} \frac{d k}{(2\pi)^{3}} \delta(E - E(k))
$$

now we can write the joint density of states as:

$$
J(\hbar\omega) = \int_{\text{states}}\int_{\text{states}} \frac{d k_{i}d k_{f}}{(2\pi)^3(2\pi)^3} \delta(E_{f}(k_{f}) - E_{i}(k_{i})-\hbar\omega)
$$

The image below show a band structure where the blue arrows represent electron transitions due to photon absorption:
![[momentum_conservation.png|350]]

in addition to the conservation of energy we must also satisfy the momentum conservation:

$$
k_{f}=k_{i}+q
$$

where $q$ is the wavevector of the photon perturbing the system. 
The wavelength of the incident radiation (infrared region, visible, up to near and far ultraviolet region) is much larger than the lattice parameter; in these situations, the photon wavevector $q$ of the incident radiation is small compared to the range of values of $k$ within the first Brillouin zone; thus we may neglect $q$ and write:

$$
k_{f} \approx k_{i}
$$

This is why vertical transitions are the most likely.
# Excitons

The absorption process in a semiconductor or insulator creates an electron in the conduction band and a hole in the valence band but we have previously neglected the Coulomb attraction between them: this can give rise to the formation of new excitations called EXCITON. An exciton is a quasiparticle, It's formed when an electron absorbs enough energy to jump to a higher energy level, leaving behind a hole. The opposite charge particles are created at the same point in space and can attract each other and form a bound electron-hole pair which is called exciton. 

In the simplest picture the exciton may be conceived as a small hydrogenic system.

![[excitons_type.png|500]]

There are two basic types of excitons:

**Wannier-Mott excitons (or free excitons):**
They are delocalized states that can move freely throughout the crystal

![[free_exciton.png|200]]

A free exciton can be modelled as a hydrogenic system, the energy of the bound states can be obtained by finding the eigenvalues of the Schrödinger equation for an electron moving in the field generated by a positive charge.

Solving the Schrödinger equation we get that:


$$
E(n) = -\frac{R_{X}}{n^{2}} \qquad r_{n}=n^{2}a_{X} 
$$

where $n$ is the principal quantum number and the important information here is that the ground state with $n=1$ has the largest binding energy and smallest radius. Instead excited states with $n>1$ are less strongly bound and have larger radius.

We also need to know that $R_X$ tends to increase and $a_X$ tends to decrease as $Eg$ (Energy gap) increases. Thus In insulators with band gap greater than about $5eV$, $a_X$ becomes comparable to the unit cell size and the Wannier-Mott model is no longer valid because the radius become too small.

Free excitons are commonly found in semiconductors with direct band gaps, like GaAs. When vertical transitions occur, they generate an electron-hole pair, where both the electron and hole have matching $k$ vectors. For excitons to form, it's essential that the electron's group velocity ($v_e$) and the hole's group velocity ($v_h$) are identical. This requirement is crucial to ensure that the electron and hole can effectively move together as a bound pair. The group velocity for an electron or hole within a band can be calculated using the following equation:

$$
v_{g} = \frac{1}{\hbar}  \frac{\partial{E}}{\partial{k}}
$$

At the zone center, bands have a flat or zero gradient. Consequently, when there's a direct transition occurring at $k=0$ in a direct gap semiconductor, it results in exciton formation. These transitions at $k=0$ are associated with a photon energy equal to the semiconductor's bandgap ($Eg$). As a result, we observing a pronounced excitonic effect in the spectral range near the fundamental gap.

The energy of the exciton created in a direct transition at $k=0$ is equal to the energy required to create the electron-hole pair, namely $E_g$, less the binding energy due to the Coulomb interaction , which is given by:

$$
\Delta E(n) = E_{g} -\frac{R_{X}}{n^{2}}
$$

![[excitons_on_alpha.png|350]]

Band edge absorption spectrum for a direct gap semiconductor with excitonic effects. The dashed line shows the expected absorption when the excitonic effects are ignored. When excitons form, they create distinct absorption peaks in the material's optical absorption spectrum. These peaks occur at energies slightly lower than the bandgap energy of the material. The presence of these exciton peaks increases the absorption coefficient at specific energies.

Free exciton absorption can only be observed in the absorption spectrum of very pure samples. This is because impurities releases free electrons ad holes that can screen the Coulomb interaction in the exciton and thereby strongly reduce the binding forces. Excitonic effects are not usually observed in doped semiconductors or metals, since they contain a very high density of free carriers.

**Frenkel excitons (or tightly bound excitons):**
![[bounded_exciton.png|200]]
Frenkel exciton occurs in large band gap materials with small dielectric constant and large effective masses and they are localized on the atom site they are generated. They can be considered as excited states of the individual atoms or molecules on which they are localized. They have small radii and correspondingly large binding energies, with typical values ranging from about $0.1 eV$ to several $eV$. Thus, they are usually stable at room temperature.

Stable excitons will only be formed if the attractive potential is sufficient to protect the exciton against thermal vibrations (phonons). Indeed these effects become stronger as the band gap increases and the temperature is lowered.

Since the maximum energy of a thermally excited phonon at room temperature $T$ is about $k_{B}T$. Thus at room temperature exciton binding energy must be greater then $k_{B}T \sim (0.025 eV)$. 

**Wannier-Mott excitons** have small binding energies due to their large radius, with typical values of $0.01 eV$. Since $k_{B}T$ at room temperature is larger, the excitons can be observed clearly only at cryogenic temperatures in many materials. Instead **Frenkel excitons** have larger binding energies of the order $0.1-1 eV$, which makes them stable at room temperature.

# QW structures

![[QW.png|400]]

We can calculate the electronic states of QWs by solving the Schrödinger eq. for the electrons and holes in the potential wells created by the band discontinuities.

$$
\Psi(x,y,z) = \psi(x)\psi(y)\psi(z) = \phi(x,y)\psi(z)
$$

Along the $x,y$ direction the electrons/holes are free to move inside the material (particle in a box but with macroscopic dimensions) and the general solutions are:

$$
\begin{align}
 & \phi(x,y) = \frac{1}{\sqrt{ A }} e^{ i \bar{k} \bar{r} } = \frac{1}{\sqrt{ A }} e^{ i(k_{x} \cdot x + k_{y} \cdot y) }  \qquad A = L_{x} \cdot L_{y} \\
 \\
 & E_{xy} = \frac{\hbar^{2} k^{2}}{2m^{*}} = \frac{\hbar^{2} (k^{2}_{x} + k^{2}_{y})}{2m^{*}} \qquad k_{x} = \frac{2\pi}{L_{x}}\cdot n_{1},\ k_{y} = \frac{2\pi}{L_{y}}\cdot n_{2}
\end{align}
$$

with $L_x$ and $L_y$ macroscopic.

Along the $z$ direction the electron/holes are described by ”particle in a box” eigenfunction and eigenvalues:

$$
\psi(z) = \sqrt{\frac{2}{d}} \sin\left(\frac{n\pi}{d} z\right)
\qquad 
E_n = \frac{\hbar^2k_{z}^{2}}{2m^*} = \frac{n^2 h^2}{8m^* d^2}
$$

The total energy for an electron or hole in the quantum level is therefore given by:

$$
\displaylines{
E(n,k_{xy}) = E(x,y)+E(z) = E(k_{xy})+E(n) \implies
\\\\
E(n,k_{xy}) = \frac{\hbar(k^{2}_{x}+k^{2}_{y})}{2m^{*}} + \frac{n^{2}h^{2}}{8m^{*}d^{2}}
}

$$

The confinement energy is inversely proportional to $d^2$ , implying that narrow wells have larger confinement energies. Furthermore, the confinement energy is inversely proportional to the effective mass, which means that lighter particles experience larger effects.

The quantization of the motion in the z-direction has three main consequences:

1) The quantization energy shifts the effective band edge to higher energy. Indeed the quantized energy levels are higher in energy than the unconfined states in the bulk material.
   
2) The density of states becomes a stepwise function, whereas the density of states of in a 3D material is proportional to $\sqrt{ E }$.
   
   ![[2DEG DOS 2.png|400]]
   
3) The confinement keeps the electron and holes closer together and hence increases the radiative recombination (the process where an electron in a higher energy state loses energy by emitting a photon and falls into a lower energy state) probability. In a quantum well, the motion of electrons and holes is restricted in the direction perpendicular to the well. This means they are more likely to be found in closer proximity to each other than in a bulk semiconductor where they could be more spread out.

## transitions in QW:
Let’s analyse the transitions between occupied and unoccupied states in a QW:

![[qw_light.png|200]]

In the typical experiment, light is directed along the $z$-axis into the quantum well. Since the electric field of light is always perpendicular to the direction of propagation, if the light is directed along $z$, there is no electric field component in that direction. Instead, the light is polarized in the $xy$-plane, meaning the electric field vector $E_0$​ only has components in the $x$ and $y$ directions. Consequently, when calculating the matrix element for the interaction of light with the electron in the quantum well, only the $x$ and $y$ components of the electron's position $r$ are relevant.

Let us assume the electric field is along x only (the more general result is just a rotation):

$$
\displaylines{
M_{fi} = \bra{f}\hat{V}_{x}\ket{i} = \bra{f}\ (|e|x\varepsilon_{x})\ \ket{i}
\\\\
\psi_i = \ket{i}  = \sqrt{\frac{2}{a}} \sin\left(\frac{n\pi}{d} z\right) \frac{1}{\sqrt{A}} e^{i\mathbf{k}_i \cdot \mathbf{r}_{xy}} = \psi_{hn}(z) \otimes \phi^V_{k_i}(x, y)
\\\\
\psi_f = \ket{f}   = \sqrt{\frac{2}{a}} \sin\left(\frac{n'\pi}{d} z\right) \frac{1}{\sqrt{A}} e^{i\mathbf{k}_f \cdot \mathbf{r}_{xy}} = \psi_{en'}(z) \otimes \phi^C_{k_f}(x, y)
}
$$

Putting all together (forgetting about all the constants):

![[matrix_element_qw_1.png|500]]

and

![[matrix_element_qw_2.png]]
The J is obtained by counting all the initial occupied states and all the unoccupied final states:

$$
J_{n=1}(\hbar\omega) = \int_{\text{states}} \frac{d k}{2\pi^2} \delta(E_{f}(k_{f}) - E_{i}(k_{i})-\hbar\omega)
$$

we simplified the formulas due to the fact that $k$ is unique.

The J is calculated with a similar procedure to the regular density of states for a QW. We, therefore, find the same step-like function independent from E:

$$
J_{n=1} = \frac{\mu}{\pi \hbar^{2}}
$$

where $\mu$ is such that $\frac{1}{\mu} = \frac{1}{m^{*}_{e} }+ \frac{1}{m^{*}_{h}}$

The result of the DOS is same as the regular density of states for a 2D material.

![[2DEG DOS 2.png|400]]

Just like the regular DOS, the lowest available state (transition) is not given by the band gap, but there is an additional shift. Indeed in a quantum well, the lowest energy level for electrons is not at the bottom of the conduction band as it would be in bulk material. Instead, it is shifted higher due to the confinement effects

The absorption coefficient is directly proportional to the joint density of state and the matrix element:

$$
\alpha \propto W_{tot}(\hbar\omega) \propto |M|^{2}J(\hbar\omega)
$$

The transition from a 3-D material to a 2-D QW alters the shape of the absorption curve (stepwise increase of absorption with the frequency), and also causes an effective shift in the bandgap by ($E_{h1} + E_{e1}$) where:

$$
E_{h_1} = \frac{h^{2}}{8m^{*}_{h}d^{2}} \qquad E_{h_1} = \frac{h^{2}}{8m^{*}_{h}d^{2}}
$$

In a quantum well the absorption threshold (the minimum photon energy for absorption to occur) is different from that of the bulk material. Once photons have enough energy to exceed this threshold, they can be absorbed by the electrons, promoting them to the conduction band and leaving behind holes in the valence band. For energies just above the threshold, the absorption coefficient in a QW is constant until you reach the next subband.

In addition to the ground state transition (from the first electron subband to the first hole subband) we also have excited state transitions. These transitions occur at higher frequencies. The threshold energy for these higher transitions accounts not only for the base band gap of the material but also for the additional energy required to reach the higher quantized electron and hole levels in the quantum well:

$$
\hbar\omega = E_{g}+E_{en}+E_{hn}
$$

Once again we have ignored so far the Coulomb interaction between the electrons and holes that are involved in the transition.

![[alpha_excitions_qw.png|450]]

also in this case, the exciton energy lead to sharp lines that occur at:

$$
\hbar\omega = E_{g}+E_{en}+E_{hn}-E^{X}
$$

where $E^X$ is exciton binding energy and $hh$ stands for heavy hole, $lh$ for light hole.

## Beyond the selection rule

When calculating the matrix element, it was assumed that we were dealing with solutions of the infinite well.

![[finite_well.png|400]]

However, if we consider a more realistic model, a finite well, in the conduction and valence band the wavefunctions will penetrate past the walls differently depending on their effective mass. The conduction and valence states, in this case, are no longer completely orthogonal and there is a small chance to violate the selection rule $Δn = 0$. Hence, the small additional peaks in the absorption spectrum.

![[finite_well_on_alpha.png|400]]

The development of quantum wells is driven largely by their application in light-emitting devices, where they offer several distinct benefits over traditional bulk materials:

1) The shift of the luminescence peak by the confinement energy allows the wavelength of the light emitting devices to be tunes by choice of the well width
   
2) The increase overlap between the electron and hole wavefunctions in the quantum well means that the emission probability is higher.
   
A simple semiconductor laser diode is made up of the following parts in order:

![[pin_laser.png|400]]

The input terminals of a homojunction laser diode are attached to metal plates, which are in turn bonded to the n-type and p-type semiconductor layers. In this diode, an intrinsic layer is positioned between the p-type and n-type materials. This layer expands the active region's volume, allowing a larger number of electrons and holes to gather at the junction. As a result, more electrons can recombine with holes at any given time, enhancing the laser's output power. The laser light is produced from an elliptical area and can be focused using an optical lens. The whole structure, consisting of p-type, intrinsic, and n-type layers (PIN diode), is typically housed in a metal casing.
