---
nextnote: 
author: BabelDev0
authorlink: https://github.com/BabelDev0
draft: false
---
# Light-electron interaction

In the classical model, nuclei and electrons can be described by a spring system. 

![[Screenshot 2024-01-23 at 11.33.41.png|200]]

The electrons are held in a stable orbit with respect to the heavy nucleus by springs which represent the restoring forces due to the binding between them.
The negatively charged electron and the positively charged nucleus form an electric dipole with a magnitude proportional to their separation.

Light is characterized by a harmonically oscillating magnetic and electric field.

![[Light Prop.png|400]]

The electric field exerts a force on the electron and the nucleus and drives oscillations of the system at frequency $\omega$ .During the oscillations of the atomic dipole, the nucleus remains more or less stationary due to its heavy mass, while the electron oscillates backwards and forwards at its natural frequency $\omega_{0}$. 

If $\omega$ coincides with one of the natural frequencies of the atom, then we have a resonance phenomenon, this is like pushing a swing at just the right times to make it go higher. At resonance, the electron absorbs energy from the light very efficiently.

The absorption strength is characterized by the absorption coefficient $\alpha$

To describe the optical transitions and the overall absorption coefficient in materials we rely on the [[Fermi golden rule|Fermi’s golden rule]] which estimates the probability per unit of time that a quantum system will transition from an initial state $\ket{i}$ to a final state $\ket{f}$ due to an external perturbation


$$
W_{fi}(\hbar\omega) = \frac{2\pi}{\hbar} \sum_{if}|M_{fi}|^{2} \delta(E_{f} - E_{i}  - \hbar \omega)
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

In semiconductors, light absorption creates energetic electrons and electron vacancies or holes. The optical absorption is given by the rate of all possible transitions for a given photon energy $\hbar\omega$.


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
D(\hbar\omega) = \int_{\text{states}}\int_{\text{states}} \frac{d k_{i}d k_{f}}{(2\pi)^3(2\pi)^3} \delta(E_{f}(k_{f}) - E_{i}(k_{i})-\hbar\omega)
$$

The image below show a band structure, the blue arrows likely represent electron transitions due to photon absorption:
![[Screenshot 2024-01-23 at 13.34.34.png|350]]

in addition to the conservation of energy we must also satisfy the momentum conservation:

$$
k_{f}=k_{i}+q
$$

where $q$ is the wavevector of the photon perturbing the system. 
The wavelength of the incident radiation (infrared region, visible, up to near and far ultraviolet region) is much larger than the lattice parameter; in these situations, the photon wavevector $q$ of the incident radiation is small compared to the range of values of $k$ within the first Brillouin zone; thus we may neglect q and write:

$$
k_{f} \approx k_{i}
$$

This is why vertical transitions are the most likely.





