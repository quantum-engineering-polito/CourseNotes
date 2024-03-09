
# From atomic physics to quantum optics

The idea of superconducting circuit is to "mimic" the behaviour of real atoms. The great advantage of superconducting circuits is that they can be more easily **tuned**.
As mentioned in the lecture on [[Superconductive qubits]], the energy levels of the atoms are discrete. 

![[natural atom.png|300]]

Furthermore, the quantum state of an atom can be influenced by an electromagnetical radiation, giving rise to *stimulated emission and absorption*. This gives some degree of freedom in controlling its state.

We will be interested in doing the same with SC circuits. But before diving in to how a SC circuit can be controlled trough EM radiation, is useful to review very briefly what happens in the case of natural atoms.

In first approximation, the coupling between an atom and an electromagnetic wave is described by the interaction of the electric field $\vec{E}$  with the electric dipole of the atom $\vec{d}$:

$$
H = - \underbrace{\vec{d}\ \cdot \ \vec{E}(t)}_{ g }
$$

Where $g$ is a factor that describes the strength of the coupling.

To eccitate a transition between the state $\ket{0}$ and $\ket{1}$ , is possible to use an electromagnetic wave with a frequency $\omega$ that matches the energy difference between this two levels: $\hbar \omega = E_{01} = \hbar \omega_{01}$ . For instance the electric field can be chosen as:

$$
\vec{E}(t) = E_0 \cos(\omega_{01})
$$

Where $E_0$ is the amplitude of the electric field.

To increase the strength of the field, and therefore the strength of the coupling $g$ , is possible to exploit a [Fabry Perot cavity](https://en.wikipedia.org/wiki/Fabry–Pérot_interferometer). 

We will not describe in detail this apparatus, we will just limit ourself in describing some of the main important facts.

A Fabry Perot cavity (FPC) is a cavity created between two semi-reflective mirrors. A light beam can be transmitted across a FPC only if the frequency is "close" to a multiple of the resonant frequency of the cavity $\omega_r$, that depends on its geometry. 

The transmitted intensity across the FPC follows a behavieour similar to this:
![[Pasted image 20240308172809.png]]
Where the peaks are centered in correspondence of the resonant frequencies (or wavelengths).
Under the resonant condition, stationary wave are formed inside of the cavity, giving rise to an electric field that is related to the volume of the cavity $V$ by:

$$
E \propto \frac{1}{\sqrt V}
$$

Therefore the field is stronger the smaller is the cavity.

# From cavity to QED
**Warning:** In this section many subsequent approximation will be used. To help the reader, we have underlined with bold characters when a new approximation is intruduced.

To operate qubits it is possible to realize a circuit that works similarly to a FPC. A possible realization is shown is the following figure:

![[Pasted Graphic.png]]

The circuit is built depositing three conductive stripes. The stipe in the middle is the conductive part, that is insulated from the two external stripes, that are grounded. 
The FPC is created in the central conductor using the two "cuts" that are visible in the figure. This creates a stripe of length $d$, that behaves as a resonator. In this case, the resonance condition occurs when the wavelength of the incoming *signal* (is optical or electronical?) is a multiple of the length of the resonator.

This configuration creates a tightly confined electric field in proximity of the resonator, that can be coupled with a qubit (Transmont qubit) as shown in the figure:
![[Pasted Graphic 1.png]]

In general the resonator has many resonant frequencies. Even so, when the circuit is operated at a frequency that is colse to a particular resonating frequency $\omega_{r}$, is possible to neglect all the other resonating modes. 
Under this approximation, called **one mode approximation**, the resonator can be treated as an armonic oscillator (LC circuit) with a frequency $\omega_{r}$.    
Therefore, the system can be schematized using the following lumped element model:

![[Pasted Graphic 3.png]]

Where $C_{g}$ is a capacitative term that describes the coupling between the Qubit and the resonator.

To understand how the system behaves we need to write a suitable Hamiltonian.
If the Resonator and the Qubit were not interacting, the hamiltonian would be just the sum of the two single Hamiltonians:

$$
\begin{align}
\hat{H} &= \hat{H}_{\text{resonator}}\ + \ \hat{H}_{\text{qubit}} \\
 &=  \frac{Q_{r}^{2}}{2C_{r}}  + \frac{1}{2} C \omega_{r} \Phi^{2}_{r}\ + \dots\\
&=  \hbar\omega_{01}(\hat{a}^{\dagger}\hat{a}+1/2) + \ \dots
\\ 

\end{align}
$$

Where in writing the final form of $\hat{H}_\text{qubit}$, the same **approximation** as in [[Superconductive qubits]] has been used.
Since the two are capacitatively coupled, to describe the system is essential to add a term that takes this interaction into account. This is done adding to the total hamiltonian a very very **mysterious interaction term**: 

$$
\begin{align}
\hat{H} &= \hat{H}_{\text{resonator}}\ + \ \hat{H}_{\text{qubit}} \ + \ \hat{H}_{\text{qubit-resonator}}\\
&= \dots \ - \ g(\hat{a}^{\dagger} - \hat{a})(\hat{b}^{\dagger} - \hat{b})
\end{align}
$$
Since the qubit is operated in a regime where only the two least energetic levels are accessible, the more general operators $\hat{b}$ and $\hat{b}^{\dagger}$ can be replaced with the operators $\hat{\sigma}_{-}$ and $\hat{\sigma}_{+}$ respectively, that act on a two level system.

We recall that the definitions of $\hat{\sigma}_{-}$ and $\hat{\sigma}_{+}$:

$$
\begin{align}
\hat{\sigma}_{-} &= \ket{0}\bra{1} && \text{``kills } \ket{0} \text{ and transforms } \ket{1} \text{ into } \ket{0} \text{"} \\
\hat{\sigma}_{+} &= \ket{1}\bra{0} &&\text{``kills } \ket{1} \text{ and transforms } \ket{0} \text{ into } \ket{1} \text{"}\\   
\end{align}
$$

This approximation can be regarded as **two levels system approximation**.
Tu further simplify the model is possible to neglect the high frequency term, applying the **rotating waves approximation**, already introduced in the chapter about [[Superconductive qubits]].

Adding together all this very intuitive, clear approximations, the total hamiltonian will be: 

$$
\begin{align}
\hat{H} &= \hat{H}_{\text{resonator}}\ + \ \hat{H}_{\text{qubit}} \ + \ \hat{H}_{\text{qubit-resonator}}\\
&= \dots \ - \ g(\hat{a}^{\dagger} - \hat{a}) (\hat{b}^{\dagger} - \hat{b}) && \longleftarrow  \text{single mode approximation, approximated interaction term and approximated} \ \hat{H}_{\text{qubit}} \\
&= \dots \ - \ g(\hat{a}^{\dagger} \hat{\sigma}_{-} + \hat{a}\hat{\sigma}_{+})  &&  \longleftarrow  \text{two levels approximation}\\
&= \boxed{\omega_r \hat{a}^{\dagger} \hat{a}+\frac{ \omega_q}{2} \hat{\sigma}_z+ g\left(\hat{a}^{\dagger} \hat{\sigma}_{-}+\hat{a} \hat{\sigma}_{+}\right)} && \longleftarrow \text{rotating waves approximation}\\

\end{align}
$$

We are engineers, we find peace and great delight in making approximations. One could even argue that making approximations is our life purpose. 
So, let us have some fun with even more approximations.

Dispersion regime

Hamiltonian that justifies readout

Readout

Control

Multiple qubit

Xmon Qubit

